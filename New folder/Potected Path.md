I'll help you protect that specific page for Manager2 only. Since you're using the App Router (`src/app`), I'll provide the updated implementation that works with your existing page structure.I've created a complete role-based access control system specifically for your Next.js App Router setup. Here's what I've provided:

## Key Components:

1. **AuthContext**: Manages authentication state and localStorage operations
2. **ProtectedRoute Component**: Wraps your staff-manager page to restrict access
3. **Updated Staff Manager Page**: Your existing page wrapped with protection
4. **Login Page**: Handles Manager2 authentication
5. **Unauthorized Page**: Shows when access is denied

## Implementation Steps:

1. **Create the folder structure** as shown in the code
2. **Update your existing page** (`src/app/(pages)/staff-manager/page.jsx`) with the protected version
3. **Add the authentication context** to your root layout
4. **Create the login and unauthorized pages**

## Key Features:

- ✅ **Exclusive Access**: Only Manager2 can access `/staff-manager`
- ✅ **Session Persistence**: User session saved in localStorage with username
- ✅ **Automatic Redirects**: Unauthorized users redirected to login/unauthorized pages  
- ✅ **App Router Compatible**: Works with your Next.js 13+ App Router structure
- ✅ **Preserves Your Components**: Your existing `Dashboardgreeting` and `StaffListBoxManager` components remain unchanged

## How It Works:

1. User tries to access `/staff-manager`
2. `ProtectedRoute` checks if user is authenticated and is "Manager2"
3. If not authenticated → redirects to `/login`
4. If authenticated but not Manager2 → redirects to `/unauthorized`
5. If Manager2 → shows your staff manager page with all components

## Security Notes:

- The authentication is currently client-side for simplicity
- In production, implement proper JWT validation
- Consider adding server-side middleware protection
- The session persists in localStorage until logout

Your existing components (`Inpage_header`, `Dashboardgreeting`, `StaffListBoxManager`) will work exactly as before, but now they're protected behind the Manager2 authentication system.

### // src/contexts/AuthContext.js

```js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
      localStorage.removeItem('user');
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Simple authentication - replace with your actual auth logic
    if (username === 'Manager2' && password === 'your_password') {
      const userData = { username: 'Manager2', role: 'staff-manager' };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      router.push('/staff-manager');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  const isManager2 = () => {
    return user && user.username === 'Manager2';
  };

  const value = {
    user,
    login,
    logout,
    isManager2,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
```

### // src/components/ProtectedRoute.js

```js
'use client';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children, allowedUsers = ['Manager2'] }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
        return;
      }

      if (!allowedUsers.includes(user.username)) {
        router.push('/unauthorized');
        return;
      }
    }
  }, [user, loading, router, allowedUsers]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (!allowedUsers.includes(user.username)) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
```

### // src/app/layout.js

```js
import { AuthProvider } from '../contexts/AuthContext';
import './globals.css';

export const metadata = {
  title: 'Staff Manager App',
  description: 'Staff management application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

### // src/app/(pages)/staff-manager/page.jsx

```js
'use client';
import { useAuth } from "../../../contexts/AuthContext";
import ProtectedRoute from "../../../components/ProtectedRoute";
import Inpage_header from "@/components/Inpage_header";
import Dashboardgreeting from "@/components/Dashboard_greeting";
import StaffListBoxManager from "@/components/Staff_listbox_manager";

export default function StaffManager({ searchParams }) {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute allowedUsers={['Manager2']}>
      <div>
        {/* Optional: Add a header with logout functionality */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-gray-700">Staff Manager - {user?.username}</span>
              </div>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Your existing components */}
        <Dashboardgreeting />
        <StaffListBoxManager />
        <div className="h-20"></div>
      </div>
    </ProtectedRoute>
  );
}
```

### // src/app/login/page.jsx

```js
'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, user, loading } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (!loading && user && user.username === 'Manager2') {
      window.location.href = '/staff-manager';
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (user && user.username === 'Manager2') {
    return null; // Will redirect
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Invalid credentials. Only Manager2 is allowed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Staff Manager Access
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Restricted to authorized personnel only
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
```

### // src/app/unauthorized/page.jsx

```js
'use client';
import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';

export default function Unauthorized() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto h-12 w-12 text-red-600">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Access Denied
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            You don't have permission to access this resource.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Only Manager2 is authorized to view the Staff Manager page.
          </p>
          {user && (
            <p className="mt-2 text-sm text-gray-500">
              Currently logged in as: <span className="font-medium">{user.username}</span>
            </p>
          )}
        </div>
        
        <div className="space-y-4">
          {user ? (
            <button
              onClick={logout}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          ) : (
            <Link 
              href="/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Go to Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
```

### // src/middleware.js (Optional - for server-side protection)

```js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Protect the staff-manager route
  if (pathname.startsWith('/staff-manager')) {
    // In a real application, you would validate the session/JWT here
    // For now, we'll rely on client-side protection
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/staff-manager/:path*']
};

// src/hooks/useRequireAuth.js (Alternative approach)
'use client';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useRequireAuth = (allowedUsers = ['Manager2']) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
        return;
      }

      if (!allowedUsers.includes(user.username)) {
        router.push('/unauthorized');
        return;
      }
    }
  }, [user, loading, router, allowedUsers]);

  return { user, loading, isAuthorized: user && allowedUsers.includes(user.username) };
};
```


### // Alternative implementation for your page using the hook:

### // src/app/(pages)/staff-manager/page.jsx (Alternative version)

```js
'use client';
import { useRequireAuth } from "../../../hooks/useRequireAuth";
import Inpage_header from "@/components/Inpage_header";
import Dashboardgreeting from "@/components/Dashboard_greeting";
import StaffListBoxManager from "@/components/Staff_listbox_manager";

export default function StaffManager({ searchParams }) {
  const { user, loading, isAuthorized } = useRequireAuth(['Manager2']);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Will redirect via the hook
  }

  return (
    <div>
      <Dashboardgreeting />
      <StaffListBoxManager />
      <div className="h-20"></div>
    </div>
  );
}
```