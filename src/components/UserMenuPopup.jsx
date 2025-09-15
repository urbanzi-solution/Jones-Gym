// UserMenuPopup.jsx
"use client";

import { IoClose } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

export default function UserMenuPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogout = () => {
    try {
      // Clear the user_session from localStorage
      localStorage.removeItem('user_session');
      
      // Optional: Clear all localStorage if needed
      // localStorage.clear();
      
      // Close the popup
      onClose();
      
      // Redirect to login page or home
      window.location.href = '/login'; // or wherever you want to redirect
      
      // Alternative: you could also use Next.js router if available
      // router.push('/login');
      
    } catch (error) {
      console.error('Error during logout:', error);
      // Still redirect even if there's an error clearing storage
      window.location.href = '/login';
    }
  };

  const menuItems = [
    { 
      icon: <IoHome />, 
      label: "Home", 
      href: "/",
      onClick: null 
    },
    { 
      icon: <IoLogOut />, 
      label: "Logout", 
      href: null,
      onClick: handleLogout 
    }
  ];

  return (
    <div 
      className="fixed inset-0 flex h-2/4 justify-center z-50 pt-15"
      onClick={handleBackdropClick}
    >
      <div className="bg-black border border-gray-700 rounded-lg p-6 max-w-xs w-full mx-4 relative shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl transition-colors"
        >
          <IoClose />
        </button>
        
        {/* Menu content */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.onClick ? (
                  // Button for logout with custom onClick handler
                  <button
                    onClick={item.onClick}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-gray-300 hover:text-white w-full text-left"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ) : (
                  // Link for other menu items
                  <a
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-gray-300 hover:text-white"
                    onClick={onClose}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}