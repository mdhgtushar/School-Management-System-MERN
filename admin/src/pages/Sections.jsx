import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Sections = () => {
  const [sections, setSections] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingSection, setEditingSection] = useState(null);

  // Get all sections
  const getSections = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/admin/section");
      setSections(response.data);
    } catch (error) {
      console.error("Error fetching sections:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSections();
  }, []);

  // Create or update section
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        section_name: e.target.section_name.value,
        section_capacity: parseInt(e.target.section_capacity.value),
        section_teacher: e.target.section_teacher.value,
        section_room: e.target.section_room.value,
        section_schedule: e.target.section_schedule.value,
        section_description: e.target.section_description.value,
      };

      if (editingSection) {
        // Update existing section
        await axios.put(`http://localhost:5000/api/admin/section/update`, {
          id: editingSection._id,
          ...formData
        });
        alert("Section updated successfully!");
      } else {
        // Create new section
        await axios.post("http://localhost:5000/api/admin/section/create", formData);
        alert("Section created successfully!");
      }

      getSections();
      setShowForm(false);
      setEditingSection(null);
      e.target.reset();
    } catch (error) {
      console.error("Error saving section:", error);
      alert("Error saving section. Please try again.");
    }
  };

  // Delete section
  const deleteSection = async (id) => {
    if (window.confirm("Are you sure you want to delete this section?")) {
      try {
        await axios.delete("http://localhost:5000/api/admin/section/delete", {
          params: { id }
        });
        alert("Section deleted successfully!");
        getSections();
      } catch (error) {
        console.error("Error deleting section:", error);
        alert("Error deleting section. Please try again.");
      }
    }
  };

  // Edit section
  const editSection = (sectionData) => {
    setEditingSection(sectionData);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Section Management</h1>
              <p className="text-gray-600 mt-1">Manage school sections and academic divisions</p>
            </div>
            <button
              onClick={() => {
                setShowForm(!showForm);
                setEditingSection(null);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              {showForm ? 'Cancel' : 'Add Section'}
            </button>
          </div>
        </div>
      </div>

      {/* Add/Edit Section Form */}
      {showForm && (
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {editingSection ? 'Edit Section' : 'Add New Section'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="text"
                    placeholder="e.g., A, B, C, Science, Arts"
                    name="section_name"
                    defaultValue={editingSection?.section_name || ''}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Capacity
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="number"
                    placeholder="Maximum students"
                    name="section_capacity"
                    defaultValue={editingSection?.section_capacity || ''}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Teacher
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="text"
                    placeholder="Assigned teacher"
                    name="section_teacher"
                    defaultValue={editingSection?.section_teacher || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Room
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="text"
                    placeholder="Room number"
                    name="section_room"
                    defaultValue={editingSection?.section_room || ''}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Schedule
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="text"
                    placeholder="e.g., Morning, Afternoon"
                    name="section_schedule"
                    defaultValue={editingSection?.section_schedule || ''}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                  placeholder="Additional section information"
                  name="section_description"
                  defaultValue={editingSection?.section_description || ''}
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingSection(null);
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  {editingSection ? 'Update Section' : 'Add Section'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sections Table */}
      <div className="px-6 py-6">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Sections</h2>
            <p className="text-sm text-gray-600 mt-1">
              {loading ? 'Loading...' : `${sections?.length || 0} sections found`}
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Section Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Capacity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teacher
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Room
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Schedule
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Loading sections...
                      </div>
                    </td>
                  </tr>
                ) : sections?.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                      No sections found
                    </td>
                  </tr>
                ) : (
                  sections?.map((section, index) => (
                    <tr key={section._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {section.section_name}
                        </div>
                        {section.section_description && (
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {section.section_description}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {section.section_capacity || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {section.section_teacher || 'Not assigned'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {section.section_room || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {section.section_schedule ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {section.section_schedule}
                          </span>
                        ) : (
                          <span className="text-gray-500">Not set</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button 
                            onClick={() => editSection(section)}
                            className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => deleteSection(section._id)}
                            className="text-red-600 hover:text-red-900 transition-colors duration-200"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections; 