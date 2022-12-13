import React from "react";
import { Link } from "react-router-dom";

const Teacher = () => {
  return (
    <div class="w-full border border-gray-200 ">
      <div class="flex items-center  p-5">
        <img
          class="w-24 h-24 rounded-full shadow-lg p-1"
          src="http://localhost/ZM-International-School-PHP/zmadminschool/img/logo.jpg"
          alt="Bonnie"
        />
        <div className="pl-5">
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Muhammad Hashem
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Assistent Teacher, English
          </span>
          <br />
          <small>Z.M.INTERNATIONAL SCHOOL</small>
          <hr />
          <Link to="/teachers/12" className="text-green-700">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
