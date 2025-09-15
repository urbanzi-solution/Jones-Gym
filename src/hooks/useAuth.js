// src\hooks\useAuth.js
'use client';
import { SessionManager } from '@/utils/sessionManager';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const router = useRouter();
  
  const getUserRole = () => {
    const userData = SessionManager.getUserData();
    return userData?.role || null;
  };

  const checkPageAccess = (pagePath) => {
    const userRole = getUserRole();
    
    if (userRole === 'restricted_manager') {
      return pagePath === '/staff-manager';
    }
    
    return true; // Regular managers can access all pages
  };

  const redirectIfNotAllowed = (pagePath) => {
    if (!checkPageAccess(pagePath)) {
      router.push('/staff-manager');
    }
  };

  return {
    getUserRole,
    checkPageAccess,
    redirectIfNotAllowed,
    isManager2: getUserRole() === 'restricted_manager'
  };
};
