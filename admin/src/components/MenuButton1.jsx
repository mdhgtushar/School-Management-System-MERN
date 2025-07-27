import React from "react";
import { Link } from "react-router-dom";

const MenuButton1 = ({ active, btn, goLink, title }) => {
  const baseClasses = "w-full flex items-center transition-all duration-300 rounded-md font-medium";
  
  const activeClasses = active 
    ? "bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg border-l-4 border-green-600" 
    : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-green-50 hover:to-green-100 hover:text-green-700 border-l-4 border-transparent hover:border-green-300";

  const paddingClasses = btn === 1 ? "p-4" : "p-3";
  const buttonClasses = `${baseClasses} ${activeClasses} ${paddingClasses}`;

  return (
    <div className="mb-2">
      <Link className={buttonClasses} to={goLink}>
        <div className="flex items-center w-full">
          <div className="flex-shrink-0 w-5 h-5 mr-3">
            {active ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
              </svg>
            )}
          </div>
          <span className="flex-1 text-left text-sm">{title}</span>
          {active && (
            <div className="flex-shrink-0 w-2 h-2 bg-white rounded-full opacity-80"></div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default MenuButton1;
