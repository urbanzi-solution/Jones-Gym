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

  // Get current month days
  const getCurrentMonthDays = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const monthDays = getCurrentMonthDays();
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  // Initialize attendance state when data is loaded
  useEffect(() => {
    if (attendanceData.length > 0) {
      const initialAttendance = {};
      const currentYear = new Date().getFullYear();
      const currentMonthNum = new Date().getMonth() + 1;
      
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
        
        // Only fill if the record is from the current month and year
        if (recordYear === currentYear && recordMonth === currentMonthNum) {
          if (initialAttendance[record.user_id]) {
            initialAttendance[record.user_id][recordDay] = record.status;
          }
        }
      });

      setAttendance(initialAttendance);
    }
  }, [attendanceData, existingAttendance]);

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
      const month = (new Date().getMonth() + 1).toString().padStart(2, '0');

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
    const monthName = new Date().toLocaleString('default', { month: 'long' });
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

  return (
    <div className="">
      <Inpage_header 
        className="text-2xl md:text-3xl font-bold mb-6" 
        title={`PT Attendance of ${name} - ${trainerId}`} 
        onExport={handleExportToExcel}
      />
      
      <div className="mt-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">
          {currentMonth}
        </h2>

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
          disabled={saveStatus === 'Saving...'}
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
            ) : attendanceData.length > 0 ? (
              attendanceData.map((record) => {
                const { presentDays, absentDays } = calculateTotals(record.user_id);
                
                return (
                  <tr key={`${record.user_id}-${record.bill_no}`} className="border-b hover:bg-gray-900">
                    <td className="py-3 px-4 font-medium sticky left-0 bg-[#2B2E32] z-10 border-r">
                      {record.user_id}
                    </td>
                    <td className="py-3 px-4 font-medium sticky left-20 bg-[#2B2E32] z-10 border-r">
                      {record.name}
                    </td>
                    {monthDays.map(day => (
                      <td key={day} className="py-2 px-2 text-center">
                        <select
                          value={getAttendanceValue(record.user_id, day)}
                          onChange={(e) => handleAttendanceChange(record.user_id, day, e.target.value)}
                          className="w-full px-1 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">-</option>
                          <option value="P" className="text-green-600">P</option>
                          <option value="A" className="text-red-600">A</option>
                        </select>
                      </td>
                    ))}
                    <td className="py-3 px-4 font-medium text-center bg-[#2B2E32] z-10 border-l text-green-400">
                      {presentDays}
                    </td>
                    <td className="py-3 px-4 font-medium text-center bg-[#2B2E32] z-10 border-l text-red-400">
                      {absentDays}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={monthDays.length + 4} className="py-3 px-4 text-center text-gray-500">
                  No attendance records found for this trainer
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}