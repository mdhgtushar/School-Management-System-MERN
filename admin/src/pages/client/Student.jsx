import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Student = () => {
  const { id } = useParams();

  // Mock student data - in real app, this would come from API based on ID
  const studentData = {
    id: id || '1',
    name: 'Ahmed Rahman',
    class: 'Five',
    section: 'A',
    roll: '15',
    bloodGroup: 'A+',
    location: 'Dhaka, Bangladesh',
    age: '10 years',
    gender: 'Male',
    admissionYear: '2022',
    academicPerformance: {
      mathematics: 85,
      english: 92,
      science: 78
    },
    parents: {
      father: {
        name: 'Abdul Rahman',
        phone: '+880 1712-123456',
        occupation: 'Engineer'
      },
      mother: {
        name: 'Fatima Rahman',
        phone: '+880 1812-123456',
        occupation: 'Teacher'
      }
    }
  };

  // Generate avatar URL based on student name
  const getAvatarUrl = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=10B981&color=fff&size=200&bold=true`;
  };

  return (
    <div className="flex-1">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Z.M. INTERNATIONAL SCHOOL</h1>
            <p className="text-green-100 text-lg">Student Profile</p>
          </div>
        </div>
      </div>

      {/* Student Profile Card */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-48 bg-gradient-to-r from-green-500 to-blue-600">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute bottom-4 left-6 text-white">
            <h2 className="text-2xl font-bold">Student Profile</h2>
            <p className="text-green-100">Academic Information</p>
          </div>
        </div>

        {/* Profile Content */}
        <div className="relative px-6 pb-6">
          {/* Profile Image */}
          <div className="flex justify-center -mt-16 mb-6">
            <div className="relative">
              <img
                src={getAvatarUrl(studentData.name)}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                alt="Student Profile"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Student Information */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{studentData.name}</h3>
            <p className="text-lg text-green-600 font-medium mb-1">Class: {studentData.class}</p>
            <p className="text-gray-600 mb-4">Section: {studentData.section} | Roll: {studentData.roll}</p>
            
            {/* Basic Info */}
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
                <span>Blood Group: {studentData.bloodGroup}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{studentData.location}</span>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Academic Performance
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mathematics</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: `${studentData.academicPerformance.mathematics}%`}}></div>
                    </div>
                    <span className="text-xs text-gray-500">{studentData.academicPerformance.mathematics}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">English</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: `${studentData.academicPerformance.english}%`}}></div>
                    </div>
                    <span className="text-xs text-gray-500">{studentData.academicPerformance.english}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Science</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: `${studentData.academicPerformance.science}%`}}></div>
                    </div>
                    <span className="text-xs text-gray-500">{studentData.academicPerformance.science}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Personal Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Age: {studentData.age}</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Gender: {studentData.gender}</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Admission: {studentData.admissionYear}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Parent Information */}
          <div className="bg-blue-50 rounded-lg p-4 mb-8">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Parent Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-3">
                <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Father
                </h5>
                <p className="text-sm text-gray-600 mb-1">Name: {studentData.parents.father.name}</p>
                <p className="text-sm text-gray-600 mb-1">Phone: {studentData.parents.father.phone}</p>
                <p className="text-sm text-gray-600">Occupation: {studentData.parents.father.occupation}</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Mother
                </h5>
                <p className="text-sm text-gray-600 mb-1">Name: {studentData.parents.mother.name}</p>
                <p className="text-sm text-gray-600 mb-1">Phone: {studentData.parents.mother.phone}</p>
                <p className="text-sm text-gray-600">Occupation: {studentData.parents.mother.occupation}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Parents
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Report Card
            </button>
            <Link to="/students" className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Students
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student; 