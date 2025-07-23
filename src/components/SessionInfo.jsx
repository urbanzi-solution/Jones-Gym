'use client';
import { useState, useEffect } from 'react';
import { SessionManager } from '@/utils/sessionManager';

const SessionInfo = () => {
  const [sessionData, setSessionData] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const updateSessionInfo = () => {
      const session = SessionManager.getSession();
      const remaining = SessionManager.getTimeUntilExpiry();
      
      setSessionData(session);
      setTimeRemaining(remaining);
    };

    // Update immediately
    updateSessionInfo();

    // Update every minute
    const interval = setInterval(updateSessionInfo, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatTimeRemaining = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      return `${days}d ${remainingHours}h`;
    }
    
    return `${hours}h ${minutes}m`;
  };

  if (!sessionData) return null;

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-white font-semibold mb-2">Session Info</h3>
      <p className="text-gray-300">Welcome, {sessionData.user.username}</p>
      <p className="text-gray-400 text-sm">
        Session expires in: {formatTimeRemaining(timeRemaining)}
      </p>
    </div>
  );
};

export default SessionInfo;
