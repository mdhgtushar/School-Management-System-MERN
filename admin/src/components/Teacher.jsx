import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = ({ info }) => {
  // Generate avatar URL based on teacher name
  const getAvatarUrl = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Teacher')}&background=3B82F6&color=fff&size=200&bold=true`;
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="p-5">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-20 h-20 rounded-lg shadow-md object-cover border-2 border-gray-100"
              src={getAvatarUrl(info?.full_name)}
              alt={info?.full_name || 'Teacher'}
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {info?.full_name || 'Teacher Name'}
              </h3>
              <p className="text-sm font-medium text-blue-600">
                {info?.subject || 'Subject Not Assigned'}
              </p>
            </div>
            
            <div className="space-y-1 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">{info?.email || 'N/A'}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="truncate">{info?.phone || 'N/A'}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
                <span>Blood: {info?.blood_group || 'N/A'}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-gray-500">Active</span>
              </div>
              
              <Link
                to={`/teachers/${info?._id || '1'}`}
                className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-md hover:bg-blue-100 transition-colors duration-200"
              >
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
