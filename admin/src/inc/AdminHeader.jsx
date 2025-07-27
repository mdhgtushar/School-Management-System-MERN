import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn, logOut } from '../slices/authSlice';
import MenuButton from '../components/MenuButton1';
import site_settings from '../Site';

const AdminHeader = () => {
  const isLoggedInn = useSelector(isLoggedIn);
  const dispatch = useDispatch();
  const logoutAction = () => {
    const is_confirmed = window.confirm('Are You Sure? You Want to Logout');
    is_confirmed ? dispatch(logOut()) : alert('Thank Your for Staying');
  };
  return (
    <div className="min-h-screen bg-gray-50 border-r border-gray-200">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <Link to="/admin">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 object-contain rounded"
                src={site_settings.school.logo}
                alt="School Logo"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {site_settings.school.name}
              </h1>
              <p className="text-sm text-gray-600">
                Admin Dashboard
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="px-4 py-6">
        {isLoggedInn ? (
          <nav className="space-y-6">
            {/* Dashboard */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Main Navigation
              </h3>
              <div className="space-y-1">
                <MenuButton active={true} btn={1} goLink={'/admin'} title="Dashboard" />
              </div>
            </div>

            {/* Academic Management */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Academic Management
              </h3>
              <div className="space-y-1">
                <MenuButton active={false} btn={2} goLink={'/admin/teachers'} title="Faculty Management" />
                <MenuButton active={false} btn={2} goLink={'/admin/students'} title="Student Records" />
                <MenuButton active={false} btn={2} goLink={'/admin/classes'} title="Class Management" />
                <MenuButton active={false} btn={2} goLink={'/admin/sections'} title="Section Management" />
              </div>
            </div>

            {/* Communication */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Communication
              </h3>
              <div className="space-y-1">
                <MenuButton active={false} btn={2} goLink={'/admin/notice'} title="Announcements" />
                <MenuButton active={false} btn={2} goLink={'/admin/result'} title="Academic Results" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Quick Overview
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Students</p>
                      <p className="text-2xl font-bold text-gray-900">1,234</p>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Faculty Members</p>
                      <p className="text-2xl font-bold text-gray-900">89</p>
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Actions
              </h3>
              <div className="space-y-1">
                <div onClick={logoutAction} className="cursor-pointer">
                  <MenuButton active={false} btn={2} goLink={'#'} title="Sign Out" />
                </div>
                <MenuButton active={false} btn={2} goLink={'/'} title="View Public Site" />
              </div>
            </div>
          </nav>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to Admin Panel</h3>
              <p className="text-sm text-gray-600 mb-6">Please sign in to access the dashboard</p>
              <div className="space-y-3">
                <Link 
                  to="/auth/login" 
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 block text-center"
                >
                  Sign In
                </Link>
                <Link 
                  to="/auth/register" 
                  className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors duration-200 block text-center"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
