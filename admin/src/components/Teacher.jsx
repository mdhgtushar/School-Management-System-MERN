import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = ({ info }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow overflow-hidden hover:shadow transition-shadow duration-300">
      <div className="flex items-center p-6">
        <img
          className="w-24 aspect-square rounded-full shadow-lg ring-2 ring-blue-200 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSXeGFOQhqyM1PkaM92his47-n7BitOA9eMvdnWfo5oXyV3zhQLl8RxnIQ8kbeKfLzzI&usqp=CAU"
          alt={info?.full_name || 'Teacher'}
        />
        <div className="pl-6 flex-1">
          <h5 className="mb-1 text-2xl font-semibold text-gray-900">Hobayer Golondaz</h5>
          <span className="block text-base text-blue-700 mb-2">Full Stack Web Development</span>
          <hr className="my-2 border-gray-200" />
          <Link
            to="/teachers/12"
            className="inline-block mt-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-medium shadow hover:bg-blue-700 transition"
          >
            Biography
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
