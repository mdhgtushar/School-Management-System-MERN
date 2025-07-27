import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../slices/authSlice';
import AdminHeader from '../inc/AdminHeader';

const Admin = () => {
  const isLoggedInn = useSelector(isLoggedIn);

  if (!isLoggedInn) return <Navigate to="/auth/login" />;

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-gray-100 border-r border-gray-300 overflow-y-auto">
        <AdminHeader />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center border-b border-gray-200">
          <Link to="/admin" className="text-xl font-bold text-blue-700 tracking-wide">
            MODERN SCHOOL V1.0
          </Link>
          <nav>
            <ul className="flex gap-4 text-sm text-gray-700 font-medium">
              <li>
                <Link to="/admin/">Settings</Link>
              </li>
              {/* Add more links here if needed */}
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Admin;
