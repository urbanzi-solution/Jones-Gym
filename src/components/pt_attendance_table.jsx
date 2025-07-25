'use client';
import { useEffect, useState } from 'react';
import Inpage_header from "@/components/Inpage_header";
import * as XLSX from 'xlsx';

export default function PTAttendanceTable({ trainerId, name }) {
  const [attendanceData, setAttendanceData] = useState([]);
  const [existingAttendance, setExistingAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attendance, setAttendance] = useState({});
  const [saveStatus, setSaveStatus] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Default to current month (0-11)

  const options = [
    'Select Month',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch membership plans (users)
        const membersResponse = await fetch('/api/fetch_membership_plans');
        const membersResult = await membersResponse.json();
        
        // Fetch existing attendance data
        const attendanceResponse = await fetch('/api/fetch_attendance');
        const attendanceResult = await attendanceResponse.json();

        console.log('Members API response:', membersResult);
        console.log('Attendance API response:', attendanceResult);

        if (membersResult.success) {
          // Filter members by trainer ID
          const filteredMembers = membersResult.data.filter(
            (record) => record.trainer === trainerId
          );
          console.log('Filtered members:', filteredMembers);
          setAttendanceData(filteredMembers);
          
          // Filter existing attendance by trainer ID
          const filteredAttendance = attendanceResult.data.filter(
            (record) => record.trainer_id === trainerId
          );
          console.log('Filtered attendance:', filteredAttendance);
          setExistingAttendance(filteredAttendance);
        } else {
          setError(membersResult.error || 'Failed to fetch data');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [trainerId]);

  // Get days for the selected month
  const getMonthDays = () => {
    const now = new Date();
    const year = now.getFullYear();
    const daysInMonth = new Date(year, selectedMonth + 1, 0).getDate();
    
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const monthDays = getMonthDays();
  const currentMonth = selectedMonth >= 0 && selectedMonth < 12 
    ? `${options[selectedMonth + 1]} ${new Date().getFullYear()}` 
    : 'Select a month';

  // Initialize attendance state when data or selected month changes
  useEffect(() => {
    if (attendanceData.length > 0) {
      const initialAttendance = {};
      const currentYear = new Date().getFullYear();
      const currentMonthNum = selectedMonth + 1; // 1-12 for comparison
      
      // Initialize attendance structure
      attendanceData.forEach(user => {
        initialAttendance[user.user_id] = {};
        monthDays.forEach(day => {
          initialAttendance[user.user_id][day] = ''; // Default empty
        });
      });

      // Fill existing attendance data, converting UTC to IST
      existingAttendance.forEach(record => {
        // Convert UTC date to IST
        const utcDate = new Date(record.date);
        const istDate = new Date(utcDate.getTime() + (5.5 * 60 * 60 * 1000)); // Add 5.5 hours for IST
        const recordYear = istDate.getFullYear();
        const recordMonth = istDate.getMonth() + 1;
        const recordDay = istDate.getDate();
        
        // Only fill if the record is from the selected month and year
        if (recordYear === currentYear && recordMonth === currentMonthNum) {
          if (initialAttendance[record.user_id]) {
            initialAttendance[record.user_id][recordDay] = record.status;
          }
        }
      });

      setAttendance(initialAttendance);
    }
  }, [attendanceData, existingAttendance, selectedMonth]);

  // Handle attendance change
  const handleAttendanceChange = (userId, day, value) => {
    setAttendance(prev => ({
      ...prev,
      [userId]: {
        ...prev[userId],
        [day]: value
      }
    }));
  };

  // Handle save button click
  const handleSaveAttendance = async () => {
    try {
      setSaveStatus('Saving...');
      const records = [];
      const year = new Date().getFullYear();
      const month = (selectedMonth + 1).toString().padStart(2, '0');

      // Convert existingAttendance to a lookup for quick comparison
      const existingAttendanceMap = {};
      existingAttendance.forEach(record => {
        const utcDate = new Date(record.date);
        const istDate = new Date(utcDate.getTime() + (5.5 * 60 * 60 * 1000)); // Convert to IST
        const recordYear = istDate.getFullYear();
        const recordMonth = istDate.getMonth() + 1;
        const recordDay = istDate.getDate();
        if (recordYear === year && recordMonth === Number(month)) {
          existingAttendanceMap[`${record.user_id}-${recordDay}`] = record.status;
        }
      });

      // Collect only new or changed attendance records
      Object.keys(attendance).forEach(userId => {
        monthDays.forEach(day => {
          const status = attendance[userId][day];
          const key = `${userId}-${day}`;
          const existingStatus = existingAttendanceMap[key];

          // Include record if it's new (no existing status) or changed (different status)
          if ((status === 'P' || status === 'A') && status !== existingStatus) {
            const formattedDate = `${year}-${month}-${day.toString().padStart(2, '0')}`;
            records.push({
              trainer_id: trainerId,
              user_id: userId,
              date: formattedDate,
              status: status
            });
          }
        });
      });

      if (records.length === 0) {
        setSaveStatus('No new or changed attendance data to save');
        return;
      }

      const response = await fetch('/api/add_attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ records })
      });

      const result = await response.json();
      if (result.success) {
        setSaveStatus('Saved successfully');
        // Update existingAttendance state to reflect saved changes
        setExistingAttendance(prev => [
          ...prev,
          ...records.map(record => ({
            trainer_id: record.trainer_id,
            user_id: record.user_id,
            date: record.date,
            status: record.status
          }))
        ]);
      } else {
        setSaveStatus(`Failed: ${result.error}`);
      }
    } catch (error) {
      setSaveStatus('Error saving');
      console.error('Error saving attendance:', error);
    } finally {
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  // Handle export to Excel
  const handleExportToExcel = () => {
    const monthName = selectedMonth >= 0 && selectedMonth < 12 ? options[selectedMonth + 1] : 'Attendance';
    const year = new Date().getFullYear();
    
    // Prepare data for Excel
    const exportData = attendanceData.map(record => {
      const userAttendance = attendance[record.user_id] || {};
      const row = {
        'User ID': record.user_id,
        'Name': record.name,
        'Month': monthName
      };
      
      // Add attendance for each day
      monthDays.forEach(day => {
        row[`Day ${day}`] = userAttendance[day] || '-';
      });
      
      // Add totals
      const { presentDays, absentDays } = calculateTotals(record.user_id);
      row['Total Present'] = presentDays;
      row['Total Absent'] = absentDays;
      
      return row;
    });

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    
    // Set column widths
    const colWidths = [
      { wch: 10 }, // User ID
      { wch: 20 }, // Name
      { wch: 15 }, // Month
      ...monthDays.map(() => ({ wch: 8 })), // Days
      { wch: 12 }, // Total Present
      { wch: 12 }  // Total Absent
    ];
    worksheet['!cols'] = colWidths;
    
    // Create workbook and append worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance');
    
    // Export to file
    const fileName = `Attendance_${name}_${trainerId}_${monthName}_${year}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  const getAttendanceValue = (userId, day) => {
    return attendance[userId]?.[day] || '';
  };

  // Calculate totals for a user
  const calculateTotals = (userId) => {
    const userAttendance = attendance[userId] || {};
    const presentDays = Object.values(userAttendance).filter(val => val === 'P').length;
    const absentDays = Object.values(userAttendance).filter(val => val === 'A').length;
    return { presentDays, absentDays };
  };

  // Handle month change
  const handleMonthChange = (e) => {
    const monthIndex = options.indexOf(e.target.value) - 1; // Convert to 0-11
    setSelectedMonth(monthIndex >= 0 ? monthIndex : new Date().getMonth());
  };

  return (
    <div className="">
      <Inpage_header 
        className="text-2xl md:text-3xl font-bold mb-6" 
        title={`PT Attendance of ${name} - ${trainerId}`} 
        onExport={handleExportToExcel}
      />
      
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-100">
            {currentMonth}
          </h2>
          <select
            value={selectedMonth >= 0 && selectedMonth < 12 ? options[selectedMonth + 1] : options[0]}
            onChange={handleMonthChange}
            className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSaveAttendance}
          className={`
            px-4 py-2 text-white rounded 
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${
              saveStatus === 'Saving...'
                ? 'bg-blue-600 cursor-not-allowed'
                : saveStatus === 'Saved'
                ? 'bg-green-500 hover:bg-green-600'
                : saveStatus?.includes('Failed') || saveStatus?.includes('Error')
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }
          `}
          disabled={saveStatus === 'Saving...' || selectedMonth < 0}
        >
          {saveStatus || 'Save Attendance'}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-700 border border-gray-300 rounded-lg">
          <thead className="bg-[#2B2E32]">
            <tr>
              <th className="py-3 px-4 text-left sticky left-0 bg-[#2B2E32] z-10">User ID</th>
              <th className="py-3 px-4 text-left sticky left-20 bg-[#2B2E32] z-10">Name</th>
              {monthDays.map(day => (
                <th key={day} className="py-3 px-2 text-center min-w-[60px]">
                  {day}
                </th>
              ))}
              <th className="py-3 px-4 text-center bg-[#2B2E32] z-10">Total Present</th>
              <th className="py-3 px-4 text-center bg-[#2B2E32] z-10">Total Absent</th>
            </tr>
          </thead>

          <tbody className="bg-gray-800 overflow-y-scroll">
            {loading ? (
              <tr>
                <td colSpan={monthDays.length + 4} className="py-3 px-4 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={monthDays.length + 4} className="py-3 px-4 text-center text-red-500">
                  {error}
                </td>
              </tr>
            ) : selectedMonth < 0 ? (
              <tr>
                <td colSpan={monthDays.length + 4} className="py-3 px-4 text-center text-gray-500">
                  Please select a month
                </td>
              </tr>
            ) : attendanceData.length > 0 ? (
              (() => {
                const ptMembers = attendanceData.filter((record) => record.plan_name === "PT");
                if (ptMembers.length === 0) {
                  return (
                    <tr>
                      <td colSpan={monthDays.length + 4} className="py-3 px-4 text-left text-gray-100">
                        No member has taken PT under this trainer
                      </td>
                    </tr>
                  );
                }
                return ptMembers.map((record) => {
                  const { presentDays, absentDays } = calculateTotals(record.user_id);

                  return (
                    <tr key={`${record.user_id}-${record.bill_no}`} className="border-b hover:bg-gray-900">
                      <td className="py-3 px-4 font-medium sticky left-0 bg-[#2B2E32] z-10 border-r">
                        {record.user_id}
                      </td>
                      <td className="py-3 px-4 font-medium sticky left-20 bg-[#2B2E32] z-10 border-r">
                        {record.name}
                      </td>
                      {monthDays.map((day) => {
                        const date = new Date(new Date().getFullYear(), selectedMonth, day);
                        const isSunday = date.getDay() === 0;
                        return (
                          <td key={day} className="py-2 px-2 text-center">
                            <select
                              value={getAttendanceValue(record.user_id, day)}
                              onChange={(e) => handleAttendanceChange(record.user_id, day, e.target.value)}
                              className={`w-full px-1 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                ["A", "S"].includes(getAttendanceValue(record.user_id, day)) 
                                  ? "bg-red-700 text-white" 
                                  : getAttendanceValue(record.user_id, day) === "P" 
                                    ? "bg-green-700 text-white" 
                                    : ""
                              }`}

                              disabled={selectedMonth < 0}
                            >
                              {isSunday ? (
                                // <option clasName="" value="S">S</option>
                                <option value="S" className="text-black">S</option>
                              ) : (
                                <>
                                  <option value="">-</option>
                                  <option value="P" className="text-black">
                                    P
                                  </option>
                                  <option value="A" className="text-black">
                                    A
                                  </option>
                                  
                                </>
                              )}
                            </select>
                          </td>
                        );
                      })}
                      <td className="py-3 px-4 font-medium text-center bg-[#2B2E32] z-10 border-l text-green-400">
                        {presentDays}
                      </td>
                      <td className="py-3 px-4 font-medium text-center bg-[#2B2E32] z-10 border-l text-red-400">
                        {absentDays}
                      </td>
                    </tr>
                  );
                });
              })()
            ) : (
              <tr>
                <td colSpan={monthDays.length + 4} className="py-3 px-4 text-center text-gray-500">
                  No member has taken PT under this trainer
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}