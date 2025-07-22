import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-center text-sm font-medium text-gray-300">Username</label>
            <input
              type="text"
              id="username"
              className="mt-1 w-full px-3 py-2 bg-gray-800 text-center border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-center text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-3 py-2 bg-gray-800 text-center border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;