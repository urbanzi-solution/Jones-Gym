// src/app/unauthorized/page.jsx
'use client';
import { useRouter } from 'next/navigation';
import { SessionManager } from '@/utils/sessionManager';

export default function Unauthorized() {
  const router = useRouter();

  const handleLogout = () => {
    SessionManager.logout();
    router.push('/login');
  };

  const handleGoBack = () => {
    const username = SessionManager.getUsername();
    if (username === 'Manager') {
      router.push('/dashboard'); // or your default page for Manager
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full space-y-8 text-center bg-gray-900 p-8 rounded-lg">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Access Denied
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            You don't have permission to access this page.
          </p>
        </div>
        <div className="space-y-4">
          <button
            onClick={handleGoBack}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go Back
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
