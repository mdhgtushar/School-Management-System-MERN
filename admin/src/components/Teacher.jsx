import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = ({ info }) => {
  return (
    <div class="w-full border border-gray-200 ">
      <div class="flex items-center  p-5">
        <img
          class="w-24 h-24 rounded-full shadow-lg p-1"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGWy7nn6aUz2Q/profile-displayphoto-shrink_200_200/0/1627676865563?e=1674691200&v=beta&t=MEVUibO-Z_SkROM-oxpqr06kXI90nSC5LDWcHTHXJrM"
          alt="Bonnie"
        />
        <div className="pl-5">
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{info?.full_name}</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{info?.subject}</span>
          <hr />
          <Link to="/teachers/12" className="text-green-700">
            Biography
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
