import React from "react";
import { Link } from "react-router-dom";

const MenuButton1 = ({ active, btn, goLink, title }) => {
  let linkStyle =
    "w-full font-thin uppercase flex items-center my-2 transition-colors duration-200 justify-start bg-gradient-to-l from-green-200  border-l-4  ";
  btn === 1 ? (linkStyle += "p-4 ") : (linkStyle += "p-3 ");
  active === true
    ? (linkStyle +=
        "to-green-300 border-blue-500 border-blue-500 text-black-500")
    : (linkStyle += "to-white border-gray-500 border-gray-500 text-gray-500");

  return (
    <div>
      <Link className={linkStyle} to={goLink}>
        <span className="text-left">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 2048 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
          </svg>
        </span>
        <span className="mx-4 text-sm font-normal"> {title} </span>
      </Link>
    </div>
  );
};

export default MenuButton1;
