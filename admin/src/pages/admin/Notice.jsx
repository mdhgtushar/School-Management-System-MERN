import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    category: 'general',
    priority: 'normal',
    type: 'info',
    date: new Date().toISOString().split('T')[0],
    isActive: true
  });

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/admin/notice/');
      if (response.data.success) {
        setNotices(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNotice) {
        // Update existing notice
        const response = await axios.put('http://localhost:5000/api/admin/notice/update', {
          id: editingNotice._id,
          ...formData
        });
        if (response.data.success) {
          alert('Notice updated successfully!');
          resetForm();
          fetchNotices();
        }
      } else {
        // Create new notice
        const response = await axios.post('http://localhost:5000/api/admin/notice/create', formData);
        if (response.data.success) {
          alert('Notice created successfully!');
          resetForm();
          fetchNotices();
        }
      }
    } catch (error) {
      console.error('Error saving notice:', error);
      alert('Error saving notice. Please try again.');
    }
  };

  const handleEdit = (notice) => {
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      body: notice.body,
      category: notice.category,
      priority: notice.priority,
      type: notice.type,
      date: new Date(notice.date).toISOString().split('T')[0],
      isActive: notice.isActive
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      try {
        const response = await axios.delete('http://localhost:5000/api/notice/delete', {
          data: { id }
        });
        if (response.data.success) {
          alert('Notice deleted successfully!');
          fetchNotices();
        }
      } catch (error) {
        console.error('Error deleting notice:', error);
        alert('Error deleting notice. Please try again.');
      }
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      const response = await axios.put('http://localhost:5000/api/notice/toggle-status', { id });
      if (response.data.success) {
        alert(response.data.message);
        fetchNotices();
      }
    } catch (error) {
      console.error('Error toggling notice status:', error);
      alert('Error updating notice status. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      body: '',
      category: 'general',
      priority: 'normal',
      type: 'info',
      date: new Date().toISOString().split('T')[0],
      isActive: true
    });
    setEditingNotice(null);
    setShowForm(false);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1zM14 5h6V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1zM4 12h6v-1H4v1zM14 12h6v-1h-6v1z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Notice Management</h1>
              <p className="text-blue-100 text-lg">Create and manage school announcements</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 transition-colors duration-200 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {showForm ? 'Cancel' : 'Add Notice'}
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {editingNotice ? 'Edit Notice' : 'Create New Notice'}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Notice Title *
                </label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter notice title"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="general">General</option>
                  <option value="urgent">Urgent</option>
                  <option value="important">Important</option>
                  <option value="academic">Academic</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="normal">Normal</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="info">Info</option>
                  <option value="warning">Warning</option>
                  <option value="success">Success</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Date
                </label>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div className="flex items-center">
                <input
                  name="isActive"
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-sm text-gray-700">Active Notice</label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Notice Content *
              </label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                rows="6"
                placeholder="Enter notice content..."
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 transition-colors duration-200"
              >
                {editingNotice ? 'Update Notice' : 'Create Notice'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Notices List */}
      <div className="bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">All Notices</h3>
        
        {notices.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1zM14 5h6V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v1zM4 12h6v-1H4v1zM14 12h6v-1h-6v1z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Notices Found</h3>
            <p className="text-gray-600">Create your first notice to get started.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice._id}
                className={`border-l-4 border-${getCategoryColor(notice.category)}-500 bg-white p-6`}
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
                        <span className={`px-2 py-1 text-xs font-medium ${notice.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {notice.isActive ? 'ACTIVE' : 'INACTIVE'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {notice.body}
                      </p>
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
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(notice)}
                      className="px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleToggleStatus(notice._id)}
                      className={`px-3 py-1 text-sm ${notice.isActive ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'} text-white transition-colors`}
                    >
                      {notice.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => handleDelete(notice._id)}
                      className="px-3 py-1 text-sm bg-red-600 text-white hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice; 