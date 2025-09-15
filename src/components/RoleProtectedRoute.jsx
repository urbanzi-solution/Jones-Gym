// src\components\RoleProtectedRoute.jsx
'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { SessionManager } from '@/utils/sessionManager';

const RoleProtectedRoute = ({ children, allowedRoles = [], restrictedPaths = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const userData = SessionManager.getUserData();
      
      if (!SessionManager.isLoggedIn()) {
        router.push('/login');
        setIsLoading(false);
        return;
      }

      const userRole = userData?.role;

      // Special handling for Manager2 (restricted_manager)
      if (userRole === 'restricted_manager') {
        // Manager2 can only access staff-manager and staff-profile pages
        if (pathname === '/staff-manager' || pathname === '/staff-profile' || pathname === '/staff-attendance' ) {
          setIsAuthorized(true);
        } else {
          // Redirect Manager2 to staff-manager if they try to access other pages
          router.push('/staff-manager');
          return;
        }
      } else {
        // Regular managers can access everything
        setIsAuthorized(true);
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, [router, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return isAuthorized ? children : null;
};

export default RoleProtectedRoute;
