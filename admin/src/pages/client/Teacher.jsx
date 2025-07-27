import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = () => {
  return (
    <div className="flex-1">
      {/* Professional Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Z.M. INTERNATIONAL SCHOOL</h1>
            <p className="text-blue-100 text-lg">Faculty Profile</p>
          </div>
        </div>
      </div>

      {/* Teacher Profile Card */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute bottom-4 left-6 text-white">
            <h2 className="text-2xl font-bold">Faculty Profile</h2>
            <p className="text-blue-100">Meet our dedicated teacher</p>
          </div>
        </div>

        {/* Profile Content */}
        <div className="relative px-6 pb-6">
          {/* Profile Image */}
          <div className="flex justify-center -mt-16 mb-6">
            <div className="relative">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQGWy7nn6aUz2Q/profile-displayphoto-shrink_200_200/0/1627676865563?e=1674691200&v=beta&t=MEVUibO-Z_SkROM-oxpqr06kXI90nSC5LDWcHTHXJrM"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                alt="Teacher Profile"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Teacher Information */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Hobayer Golondaz Tushar</h3>
            <p className="text-lg text-blue-600 font-medium mb-1">Full-Stack MERN Developer</p>
            <p className="text-gray-600 mb-4">JavaScript Specialist</p>
            
            {/* Location and Contact */}
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Mymensingh Division, Bangladesh</span>
              </div>
              <Link to="/profile" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contact Info</span>
              </Link>
            </div>
          </div>

          {/* Skills and Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Technical Skills
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">MERN Stack</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">JavaScript</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">React.js</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Teaching Experience
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Full-Stack Development</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">JavaScript Programming</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Web Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Message
            </button>
            <button className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
