'use client';
import { useRouter } from 'next/navigation';
import { SessionManager } from '@/utils/sessionManager';

const LogoutButton = ({ className = "" }) => {
  const router = useRouter();

  const handleLogout = () => {
    SessionManager.clearSession();
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-200 ${className}`}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
