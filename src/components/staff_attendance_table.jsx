'use client';
import { useEffect, useState } from 'react';
import Inpage_header from "@/components/Inpage_header";
import * as XLSX from 'xlsx';

export default function PTAttendanceTable({ trainerId, name }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attendanceData, setAttendanceData] = useState({});
  const [existingAttendance, setExistingAttendance] = useState([]);
  const [saveStatus, setSaveStatus] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

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

  // Load existing attendance data and initialize structure
  useEffect(() => {
    const loadAttendanceData = async () => {
      if (!trainerId) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // Initialize attendance data structure
        const initialData = {};
        monthDays.forEach(day => {
          initialData[day] = {
            mrng_from: '',
            mrng_to: '',
            mrng_status: '',
            evng_from: '',
            evng_to: '',
            evng_status: ''
          };
        });

        const year = new Date().getFullYear();
        const month = selectedMonth + 1;
        
        const response = await fetch(`/api/fetch_staff_attendance?trainer_id=${trainerId}&year=${year}&month=${month}`);
        
        if (response.ok) {
          const result = await response.json();
          
          if (result.success && result.data) {
            setExistingAttendance(result.data);
            
            // Fill existing data into initialData
            result.data.forEach(record => {
              const day = record.day;
              if (initialData[day]) {
                initialData[day] = {
                  mrng_from: record.mrng_from || '',
                  mrng_to: record.mrng_to || '',
                  mrng_status: record.mrng_status || '',
                  evng_from: record.evng_from || '',
                  evng_to: record.evng_to || '',
                  evng_status: record.evng_status || ''
                };
              }
            });
          }
        } else {
          console.error('Failed to fetch attendance data');
          setError('Failed to load attendance data');
        }
        
        setAttendanceData(initialData);
        
      } catch (error) {
        console.error('Error loading attendance data:', error);
        setError('Error loading attendance data');
        
        // Still initialize empty data structure even if fetch fails
        const initialData = {};
        monthDays.forEach(day => {
          initialData[day] = {
            mrng_from: '',
            mrng_to: '',
            mrng_status: '',
            evng_from: '',
            evng_to: '',
            evng_status: ''
          };
        });
        setAttendanceData(initialData);
        
      } finally {
        setLoading(false);
      }
    };

    loadAttendanceData();
  }, [trainerId, selectedMonth]);

  // Handle input changes
  const handleInputChange = (day, field, value) => {
    setAttendanceData(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value
      }
    }));
  };

  // Handle save attendance
  const handleSaveAttendance = async () => {
    try {
      setSaveStatus('Saving...');
      const records = [];
      const year = new Date().getFullYear();
      const month = (selectedMonth + 1).toString().padStart(2, '0');

      // Prepare records for saving
      Object.keys(attendanceData).forEach(day => {
        const dayData = attendanceData[day];
        const formattedDate = `${year}-${month}-${day.toString().padStart(2, '0')}`;
        
        // Only save if there's some data entered
        if (dayData.mrng_from || dayData.mrng_to || dayData.mrng_status || 
            dayData.evng_from || dayData.evng_to || dayData.evng_status) {
          records.push({
            trainer_id: trainerId,
            date: formattedDate,
            mrng_from: dayData.mrng_from,
            mrng_to: dayData.mrng_to,
            mrng_status: dayData.mrng_status,
            evng_from: dayData.evng_from,
            evng_to: dayData.evng_to,
            evng_status: dayData.evng_status
          });
        }
      });

      if (records.length === 0) {
        setSaveStatus('No attendance data to save');
        return;
      }

      const response = await fetch('/api/add_staff_attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ records })
      });

      const result = await response.json();
      if (result.success) {
        setSaveStatus('Saved successfully');
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

  // Handle month change
  const handleMonthChange = (e) => {
    const monthIndex = options.indexOf(e.target.value) - 1;
    const newMonth = monthIndex >= 0 ? monthIndex : new Date().getMonth();
    setSelectedMonth(newMonth);
    setError(null);
    setSaveStatus(null);
  };

  // Calculate attendance statistics
  const getAttendanceStats = () => {
    let morningPresent = 0;
    let morningAbsent = 0;
    let eveningPresent = 0;
    let eveningAbsent = 0;
    
    Object.values(attendanceData).forEach(dayData => {
      if (dayData.mrng_status === 'P') morningPresent++;
      if (dayData.mrng_status === 'A') morningAbsent++;
      if (dayData.evng_status === 'P') eveningPresent++;
      if (dayData.evng_status === 'A') eveningAbsent++;
    });
    
    return { morningPresent, morningAbsent, eveningPresent, eveningAbsent };
  };

  const stats = getAttendanceStats();

  // Status dropdown component
  const StatusDropdown = ({ value, onChange, type }) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-2 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        value === 'P' 
          ? 'bg-green-100 text-green-800 border-green-300' 
          : value === 'A'
          ? 'bg-red-100 text-red-800 border-red-300'
          : 'bg-gray-700 text-gray-100 border-gray-500'
      }`}
    >
      <option value="">-</option>
      <option value="P" className="bg-green-100 text-green-800">P</option>
      <option value="A" className="bg-red-100 text-red-800">A</option>
    </select>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-gray-100">Loading attendance data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="">
      <Inpage_header 
        className="text-2xl md:text-3xl font-bold mb-6" 
        title={`Daily Attendance of ${name} - ${trainerId}`} 
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
                : saveStatus === 'Saved successfully'
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

      <div className="overflow-x-auto mt-6 pb-20">
        <table className="min-w-full bg-gray-700 border border-gray-300 rounded-lg">
          <thead className="bg-[#2B2E32]">
            <tr>
              <th className="py-3 px-4 text-center border-r border-gray-600 sticky left-0 bg-[#2B2E32] z-10">Days</th>
              <th colSpan="3" className="py-3 px-4 text-center border-r border-gray-600 bg-[#2B2E32]">Morning</th>
              <th colSpan="3" className="py-3 px-4 text-center bg-[#2B2E32]">Evening</th>
            </tr>
            <tr>
              <th className="py-2 px-4 text-center border-r border-gray-600 sticky left-0 bg-[#2B2E32] z-10"></th>
              <th className="py-2 px-4 text-center border-r border-gray-600 bg-[#2B2E32]">From</th>
              <th className="py-2 px-4 text-center border-r border-gray-600 bg-[#2B2E32]">To</th>
              <th className="py-2 px-4 text-center border-r border-gray-600 bg-[#2B2E32]">Status</th>
              <th className="py-2 px-4 text-center border-r border-gray-600 bg-[#2B2E32]">From</th>
              <th className="py-2 px-4 text-center border-r border-gray-600 bg-[#2B2E32]">To</th>
              <th className="py-2 px-4 text-center bg-[#2B2E32]">Status</th>
            </tr>
          </thead>

          <tbody className="bg-gray-800">
            {monthDays.map(day => (
              <tr key={day} className="border-b border-gray-600">
                <td className="py-3 px-4 border-r border-gray-600 text-center font-semibold sticky left-0 bg-gray-800">
                  {day}
                </td>
                
                {/* Morning From */}
                <td className="py-3 px-4 border-r border-gray-600 text-center">
                  <input 
                    type="time"
                    value={attendanceData[day]?.mrng_from || ''}
                    onChange={(e) => handleInputChange(day, 'mrng_from', e.target.value)}
                    className="w-full px-2 py-1 rounded text-sm bg-gray-700 text-gray-100 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                
                {/* Morning To */}
                <td className="py-3 px-4 border-r border-gray-600 text-center">
                  <input 
                    type="time"
                    value={attendanceData[day]?.mrng_to || ''}
                    onChange={(e) => handleInputChange(day, 'mrng_to', e.target.value)}
                    className="w-full px-2 py-1 rounded text-sm bg-gray-700 text-gray-100 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                
                {/* Morning Status */}
                <td className="py-3 px-4 border-r border-gray-600 text-center">
                  <StatusDropdown
                    value={attendanceData[day]?.mrng_status || ''}
                    onChange={(value) => handleInputChange(day, 'mrng_status', value)}
                    type="morning"
                  />
                </td>
                
                {/* Evening From */}
                <td className="py-3 px-4 border-r border-gray-600 text-center">
                  <input 
                    type="time"
                    value={attendanceData[day]?.evng_from || ''}
                    onChange={(e) => handleInputChange(day, 'evng_from', e.target.value)}
                    className="w-full px-2 py-1 rounded text-sm bg-gray-700 text-gray-100 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                
                {/* Evening To */}
                <td className="py-3 px-4 border-r border-gray-600 text-center">
                  <input 
                    type="time"
                    value={attendanceData[day]?.evng_to || ''}
                    onChange={(e) => handleInputChange(day, 'evng_to', e.target.value)}
                    className="w-full px-2 py-1 rounded text-sm bg-gray-700 text-gray-100 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
                
                {/* Evening Status */}
                <td className="py-3 px-4 text-center">
                  <StatusDropdown
                    value={attendanceData[day]?.evng_status || ''}
                    onChange={(value) => handleInputChange(day, 'evng_status', value)}
                    type="evening"
                  />
                </td>
              </tr>
            ))}

            {/* Summary Rows */}
            <tr className="bg-gray-600 border-t-2 border-blue-500">
              <td className="py-3 px-4 border-r border-gray-500 text-center font-bold text-blue-200 sticky left-0 bg-gray-600">
                STATS
              </td>
              <td colSpan="6" className="py-3 px-4 text-center font-semibold text-blue-200">
                Attendance Summary for {currentMonth}
              </td>
            </tr>

            <tr className="bg-gray-700">
              <td className="py-2 px-4 border-r border-gray-600 text-center font-semibold text-green-400 sticky left-0 bg-gray-700">
                Present
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center text-green-300">
                -
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center text-green-300">
                -
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                  {stats.morningPresent}
                </span>
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center text-green-300">
                -
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center text-green-300">
                -
              </td>
              <td className="py-2 px-4 text-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                  {stats.eveningPresent}
                </span>
              </td>
            </tr>

            <tr className="bg-gray-700">
              <td className="py-2 px-4 border-r border-gray-600 text-center font-semibold text-red-400 sticky left-0 bg-gray-700">
                Absent
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center text-red-300">
                -
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center text-red-300">
                -
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                  {stats.morningAbsent}
                </span>
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center text-red-300">
                -
              </td>
              <td className="py-2 px-4 border-r border-gray-600 text-center text-red-300">
                -
              </td>
              <td className="py-2 px-4 text-center">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                  {stats.eveningAbsent}
                </span>
              </td>
            </tr>

            <tr className="bg-gray-600">
              <td className="py-2 px-4 border-r border-gray-500 text-center font-bold text-blue-300 sticky left-0 bg-gray-600">
                Total Days
              </td>
              <td className="py-2 px-4 border-r border-gray-500 text-center text-blue-200">
                -
              </td>
              <td className="py-2 px-4 border-r border-gray-500 text-center text-blue-200">
                -
              </td>
              <td className="py-2 px-4 border-r border-gray-500 text-center">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                  {stats.morningPresent + stats.morningAbsent}
                </span>
              </td>
              <td className="py-2 px-4 border-r border-gray-500 text-center text-blue-200">
                -
              </td>
              <td className="py-2 px-4 border-r border-gray-500 text-center text-blue-200">
                -
              </td>
              <td className="py-2 px-4 text-center">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">
                  {stats.eveningPresent + stats.eveningAbsent}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}