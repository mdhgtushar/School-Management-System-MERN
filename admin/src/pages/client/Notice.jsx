import React, { useState, useEffect } from "react";
import axios from 'axios';

const Notice = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('http://localhost:5000/api/admin/notice/', {
        params: { isActive: true }
      });
      
      if (response.data.success) {
        setNotices(response.data.data);
      } else {
        setError('Failed to fetch notices');
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
      setError('Error loading notices. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'urgent': return 'red';
      case 'important': return 'blue';
      case 'academic': return 'green';
      case 'general': return 'gray';
      default: return 'gray';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'info':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'success':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const filteredNotices = selectedCategory === 'all' 
    ? notices 
    : notices.filter(notice => notice.category === selectedCategory);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 mb-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1zM14 5h6V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1zM4 12h6v-1H4v1zM14 12h6v-1h-6v1z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Z.M. INTERNATIONAL SCHOOL</h1>
              <p className="text-green-100 text-lg">School Notices & Announcements</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 text-center">
          <div className="w-16 h-16 bg-red-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Notices</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchNotices}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1zM14 5h6V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1zM4 12h6v-1H4v1zM14 12h6v-1h-6v1z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Z.M. INTERNATIONAL SCHOOL</h1>
            <p className="text-green-100 text-lg">School Notices & Announcements</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Notices
          </button>
          <button
            onClick={() => setSelectedCategory('urgent')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === 'urgent'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Urgent
          </button>
          <button
            onClick={() => setSelectedCategory('important')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === 'important'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Important
          </button>
          <button
            onClick={() => setSelectedCategory('academic')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === 'academic'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Academic
          </button>
          <button
            onClick={() => setSelectedCategory('general')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === 'general'
                ? 'bg-gray-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            General
          </button>
        </div>
      </div>

      {/* Notices List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <div
            key={notice._id}
            className={`bg-white p-6 border-l-4 border-${getCategoryColor(notice.category)}-500`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className={`w-10 h-10 bg-${getCategoryColor(notice.category)}-100 flex items-center justify-center mt-1`}>
                  {getTypeIcon(notice.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {notice.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium bg-${getCategoryColor(notice.category)}-100 text-${getCategoryColor(notice.category)}-800`}>
                      {notice.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {notice.body}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(notice.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm bg-green-600 text-white hover:bg-green-700 transition-colors">
                        Read More
                      </button>
                      <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotices.length === 0 && (
        <div className="bg-white p-8 text-center">
          <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1zM14 5h6V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1zM4 12h6v-1H4v1zM14 12h6v-1h-6v1z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Notices Found</h3>
          <p className="text-gray-600">There are no notices in the selected category at the moment.</p>
        </div>
      )}

      {/* Footer Info */}
      <div className="bg-gray-50 p-6 mt-6">
        <div className="text-center text-sm text-gray-600">
          <p>For urgent matters, please contact the school office directly.</p>
          <p className="mt-1">Phone: +880 1712-498815 | Email: zzmism2020@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
