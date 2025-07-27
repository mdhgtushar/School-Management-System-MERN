import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../inc/Footer';
import Header from '../inc/Header';

const Client = () => {
  return (
    <>
      <Header />
      <div className="container flex justify-between mx-auto py-5">
        <Outlet />

        <div className="w-96 px-3">
          <div className="bg-white rounded border border-gray-200 p-6">
            {/* Contact Information */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>zzmism2020@gmail.com</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+8801712498815</span>
                </div>
              </div>
            </div>

            {/* Campus Address */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Campus Address</h3>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>SHAHID MINAR ROAD, NATUN BAZAR</p>
                <p>BIRAMPUR, DINAJPUR</p>
              </div>
            </div>

            {/* Admission Fee */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Admission Fee</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Play - Two</span>
                  <span className="font-semibold text-gray-900">৳500</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Three - Five</span>
                  <span className="font-semibold text-gray-900">৳700</span>
                </div>
              </div>
            </div>

            {/* Monthly Fee */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Monthly Fee</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Play - Nursery</span>
                  <span className="font-semibold text-gray-900">৳500</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Two - Three</span>
                  <span className="font-semibold text-gray-900">৳700</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Four - Five</span>
                  <span className="font-semibold text-gray-900">৳1000</span>
                </div>
              </div>
            </div>

            {/* Class Time */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Class Schedule</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-blue-900">Morning Session</div>
                  <div className="text-xs text-blue-700">08:00 AM - 10:15 AM</div>
                  <div className="text-xs text-blue-600">Play - Two</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-green-900">Afternoon Session</div>
                  <div className="text-xs text-green-700">10:15 AM - 02:15 PM</div>
                  <div className="text-xs text-green-600">Three - Five</div>
                </div>
              </div>
            </div>

            {/* Quick Contact Button */}
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Client;
