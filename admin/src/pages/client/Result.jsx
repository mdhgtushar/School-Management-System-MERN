import React, { useState } from 'react';
import site_settings from '../../Site';

const Result = () => {
  const [step, setStep] = useState(1); // 1 for input, 2 for result
  const [formData, setFormData] = useState({
    class: '',
    year: '',
    exam: '',
    registration: '',
    roll: ''
  });
  const [loading, setLoading] = useState(false);

  if (!site_settings.pages.result.view) {
    return <div>This page is unavailable</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      class: '',
      year: '',
      exam: '',
      registration: '',
      roll: ''
    });
    setStep(1);
  };

  return (
    <div className="w-full min-h-screen">
      {/* Step 1: Information Input */}
      {step === 1 && (
        <div className="w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Z.M. INTERNATIONAL SCHOOL</h1>
                <p className="text-green-100 text-lg">Result Inquiry System</p>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8 px-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div className="w-16 h-1 bg-green-600 mx-2"></div>
                <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-sm text-gray-600">Step 1 of 2: Enter Student Information</span>
            </div>
          </div>

          {/* Input Form */}
          <div className="bg-white p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Select Class
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="">Select Class</option>
                    {site_settings.school.adminstration.classes.map((data) => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Select Year
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="">Select Year</option>
                    {site_settings.school.adminstration.years.map((data) => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Select Exam
                  </label>
                  <select
                    name="exam"
                    value={formData.exam}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="">Select Exam</option>
                    {site_settings.school.adminstration.exams.map((data) => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Registration Number
                  </label>
                  <input
                    name="registration"
                    value={formData.registration}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter Registration Number"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Roll Number
                  </label>
                  <input
                    name="roll"
                    value={formData.roll}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter Roll Number"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 transition-colors duration-200 flex items-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search Result
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Step 2: Result Display */}
      {step === 2 && (
        <div className="w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Z.M. INTERNATIONAL SCHOOL</h1>
                  <p className="text-green-100 text-lg">Academic Result</p>
                </div>
              </div>
              <button
                onClick={resetForm}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 transition-colors duration-200 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                New Search
              </button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8 px-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  ✓
                </div>
                <div className="w-16 h-1 bg-green-600 mx-2"></div>
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-sm text-gray-600">Step 2 of 2: View Result</span>
            </div>
          </div>

          {/* Student Information */}
          <div className="bg-white p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Student Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex justify-between p-3 bg-gray-50">
                <span className="font-semibold text-gray-700">Roll No:</span>
                <span className="text-gray-900">207817</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50">
                <span className="font-semibold text-gray-700">Name:</span>
                <span className="text-gray-900">HOBAYER GOLONDAZ TUSHAR</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50">
                <span className="font-semibold text-gray-700">Reg. No:</span>
                <span className="text-gray-900">1921047672</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50">
                <span className="font-semibold text-gray-700">Father's Name:</span>
                <span className="text-gray-900">MONZIL GOLONDAZ</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50">
                <span className="font-semibold text-gray-700">Group:</span>
                <span className="text-gray-900">SCIENCE</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50">
                <span className="font-semibold text-gray-700">Mother's Name:</span>
                <span className="text-gray-900">JESMIN NAHAR</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50">
                <span className="font-semibold text-gray-700">Session:</span>
                <span className="text-gray-900">2020-21</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50">
                <span className="font-semibold text-gray-700">Result:</span>
                <span className="text-green-600 font-bold">GPA=5.00</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50">
                <span className="font-semibold text-gray-700">Institute:</span>
                <span className="text-gray-900">GAFARGAON ISLAMIA GOVT. HIGH SCHOOL</span>
              </div>
            </div>
          </div>

          {/* Grade Sheet */}
          <div className="bg-white p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Grade Sheet
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Subject</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Paper</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Theory</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">MCQ</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Practical</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Total Mark</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { subject: 'Bangla', total: 168, grade: 'A+' },
                    { subject: 'English', total: 178, grade: 'A+' },
                    { subject: 'Mathematics', total: 92, grade: 'A+' },
                    { subject: 'Bangladesh And Global Studies', total: 81, grade: 'A+' },
                    { subject: 'Islam & Moral Education', total: 87, grade: 'A+' },
                    { subject: 'Physics', total: 89, grade: 'A+' },
                    { subject: 'Chemistry', total: 87, grade: 'A+' },
                    { subject: 'Higher Mathematics', total: 91, grade: 'A+' },
                    { subject: 'Information & Communication Technology', total: 43, grade: 'A+' },
                    { subject: 'Biology', total: 92, grade: 'A+' }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">{item.subject}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1st</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-semibold">{item.total}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-green-600">{item.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Continuous Assessment */}
          <div className="bg-white p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Grade Sheet (Continuous Assessment)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Subject</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Paper</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Theory</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">MCQ</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Practical</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Total Mark</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { subject: 'Physical Education, Health & Sports', total: 98, grade: 'A+' },
                    { subject: 'Career Education', total: 49, grade: 'A+' }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">{item.subject}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">1st</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-semibold">{item.total}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-green-600">{item.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Signature Section */}
          <div className="bg-white p-6 mb-6">
            <div className="flex justify-end items-center">
              <div className="text-center">
                <img
                  className="w-16 h-16 mx-auto mb-2"
                  src="http://mymensinghboard.webbaseapplication.com/resultmb/sign.png"
                  alt="Signature"
                />
                <p className="font-semibold text-gray-900">(Md. Shamsul Islam)</p>
                <p className="text-sm text-gray-600">Controller of Examinations</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 pb-6">
            <button
              onClick={() => window.print()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 transition-colors duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Result
            </button>
            <button
              onClick={resetForm}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 transition-colors duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              New Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
