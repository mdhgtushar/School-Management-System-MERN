import React from 'react';
import { Link } from 'react-router-dom';

const Student = ({ info }) => {
  // Generate avatar based on student name
  const getAvatarUrl = (name) => {
    const colors = ['blue', 'green', 'purple', 'pink', 'indigo', 'yellow', 'red', 'teal'];
    const color = colors[name.length % colors.length];
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${color}&color=fff&size=96`;
  };

  return (
    <div className="w-full border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="p-5 flex-1">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {info?.name || 'Student Name'}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Class: {info?.class || 'N/A'}, Section: {info?.section || 'N/A'}
          </span>
          <br />
          <small className="text-gray-600">Blood Group: {info?.bloodGroup || 'N/A'}</small>
          <hr className="my-2" />
          <Link to={`/students/${info?.id || '1'}`} className="text-green-700 hover:text-green-900">
            View Profile
          </Link>
        </div>
        <img
          className="w-24 h-full pr-5 "
          src={getAvatarUrl(info?.name || 'Student')}
          alt={info?.name || 'Student'}
        />
      </div>
    </div>
  );
};

export default Student;
