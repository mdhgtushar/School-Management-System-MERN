import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Students = () => {
  //Declaring States
  const [students, setStudent] = useState([]);
  const [class_name, setClass] = useState([]);
  const [section, setSection] = useState([]);
  const [query, setQuery] = useState();
  const [section_name, setSection_name] = useState();
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedClass, setSelectedClass] = useState('all');

  //Assigning Values
  const blood_group = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  //Http Requests To Get Data
  const get_students = async () => {
    setLoading(true);
    try {
      const data = await axios.get("http://localhost:5000/api/admin/student", {
        params: {
          class_name: query,
          section: section_name,
        },
      });
      setStudent(data.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const get_classs = async () => {
    try {
      const data = await axios.get("http://localhost:5000/api/admin/class");
      setClass(data.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const get_secton = async () => {
    try {
      const data = await axios.get("http://localhost:5000/api/admin/section");
      setSection(data.data);
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  //UseEffect Hook
  useEffect(() => {
    get_students();
    get_classs();
    get_secton();
  }, [query, section_name]);

  //Createing A Student
  const createStudent = async (e) => {
    e.preventDefault();
    try {
      const saveStudent = await axios.post(
        "http://localhost:5000/api/admin/student/create",
        {
          full_name: e.target.full_name.value,
          class_name: e.target.class_name.value,
          section: e.target.section.value,
          blood_group: e.target.blood_group.value,
          father_name: e.target.father_name.value,
          father_nid: e.target.father_nid.value,
          father_phone: e.target.father_phone.value,
          father_email: e.target.father_email.value,
          mother_name: e.target.mother_name.value,
          mother_nid: e.target.mother_nid.value,
          mother_phone: e.target.mother_phone.value,
          mother_email: e.target.mother_email.value,
        }
      );
      if (saveStudent) {
        alert(saveStudent.data.message);
        get_students();
        setShowForm(false);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error creating student:", error);
      alert("Error creating student. Please try again.");
    }
  };

  //Delete A student
  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        const deleteStudent = await axios.delete(
          "http://localhost:5000/api/admin/student/delete",
          {
            params: {
              id: id,
            },
          }
        );
        if (deleteStudent) {
          alert(deleteStudent.data.message);
          get_students();
        }
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Error deleting student. Please try again.");
      }
    }
  };

  // Group students by class
  const groupStudentsByClass = () => {
    const grouped = {};
    students.forEach(student => {
      const className = student.student?.class_name || 'Unassigned';
      if (!grouped[className]) {
        grouped[className] = [];
      }
      grouped[className].push(student);
    });
    return grouped;
  };

  // Filter students by selected class
  const getFilteredStudents = () => {
    if (selectedClass === 'all') {
      return students;
    }
    return students.filter(student => student.student?.class_name === selectedClass);
  };

  const groupedStudents = groupStudentsByClass();
  const filteredStudents = getFilteredStudents();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Student Records</h1>
              <p className="text-gray-600 mt-1">Manage student information and enrollment</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              {showForm ? 'Cancel' : 'Add Student'}
            </button>
          </div>
        </div>
      </div>

      {/* Add Student Form */}
      {showForm && (
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Student</h2>
            <form onSubmit={(e) => createStudent(e)} className="space-y-6">
              {/* Student Information */}
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-4">Student Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="text"
                      placeholder="Enter full name"
                      name="full_name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Class
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      name="class_name"
                      required
                    >
                      <option value="">Select Class</option>
                      {class_name.map((class_n, key) => (
                        <option key={key} value={class_n.class_name}>
                          {class_n.class_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      name="section"
                      required
                    >
                      <option value="">Select Section</option>
                      {section.map((section, key) => (
                        <option key={key} value={section.section_name}>
                          {section.section_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Blood Group
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      name="blood_group"
                      required
                    >
                      <option value="">Select Blood Group</option>
                      {blood_group.map((group, key) => (
                        <option key={key} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Father's Information */}
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-4">Father's Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Father's Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="text"
                      placeholder="Enter father's name"
                      name="father_name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Father's NID
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="text"
                      placeholder="Enter NID number"
                      name="father_nid"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Father's Phone
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="tel"
                      placeholder="Enter phone number"
                      name="father_phone"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Father's Email
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="email"
                      placeholder="Enter email address"
                      name="father_email"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Mother's Information */}
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-4">Mother's Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mother's Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="text"
                      placeholder="Enter mother's name"
                      name="mother_name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mother's NID
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="text"
                      placeholder="Enter NID number"
                      name="mother_nid"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mother's Phone
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="tel"
                      placeholder="Enter phone number"
                      name="mother_phone"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mother's Email
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="email"
                      placeholder="Enter email address"
                      name="mother_email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Add Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Class Filter */}
      <div className="px-6 py-4">
        <div className="bg-white shadow-sm rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Class</h3>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                selectedClass === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedClass('all')}
            >
              All Classes ({students.length})
            </button>
            {Object.keys(groupedStudents).map((className) => (
              <button
                key={className}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  selectedClass === className
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedClass(className)}
              >
                {className} ({groupedStudents[className].length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Students by Class */}
      <div className="px-6 py-4">
        {selectedClass === 'all' ? (
          // Show all students grouped by class
          Object.keys(groupedStudents).map((className) => (
            <div key={className} className="mb-8">
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h2 className="text-xl font-semibold text-gray-900">{className}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {groupedStudents[className].length} students enrolled
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
                          Student Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Section
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Blood Group
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Parent Contact
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {groupedStudents[className].map((student, index) => (
                        <tr key={student._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {student.student?.full_name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {student.student?.section}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {student.student?.blood_group}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              <div className="font-medium">Father: {student.father?.father_phone || 'N/A'}</div>
                              <div className="text-gray-500">Mother: {student.mother?.mother_phone || 'N/A'}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end space-x-2">
                              <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <button 
                                onClick={() => deleteStudent(student._id)}
                                className="text-red-600 hover:text-red-900 transition-colors duration-200"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Show filtered students for selected class
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Students in {selectedClass}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {loading ? 'Loading...' : `${filteredStudents?.length || 0} students found`}
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
                      Student Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Section
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Blood Group
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Parent Contact
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Loading students...
                        </div>
                      </td>
                    </tr>
                  ) : filteredStudents?.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                        No students found in {selectedClass}
                      </td>
                    </tr>
                  ) : (
                    filteredStudents?.map((student, index) => (
                      <tr key={student._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {student.student?.full_name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {student.student?.section}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {student.student?.blood_group}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            <div className="font-medium">Father: {student.father?.father_phone || 'N/A'}</div>
                            <div className="text-gray-500">Mother: {student.mother?.mother_phone || 'N/A'}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button 
                              onClick={() => deleteStudent(student._id)}
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
        )}
      </div>
    </div>
  );
};

export default Students;
