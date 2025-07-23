'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SessionManager } from '@/utils/sessionManager';

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      if (SessionManager.isLoggedIn()) {
        setIsAuthorized(true);
      } else {
        router.push('/login');
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return isAuthorized ? children : null;
};

export default ProtectedRoute;
