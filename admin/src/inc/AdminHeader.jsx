import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, logOut } from "../slices/authSlice";

const AdminHeader = () => {
  const isLoggedInn = useSelector(isLoggedIn);
  const dispatch = useDispatch();
  const logoutAction = () => {
    const is_confirmed = window.confirm("Are You Sure? You Want to Logout");
    is_confirmed ? dispatch(logOut()) : alert("Thank Your for Staying");
  };
  return (
    <div>
      <Link to="/admin">
        <div className="flex items-center">
          <div class="p-5 pl-0">
            <img
              className="h-20 w-20"
              src="http://localhost/ZM-International-School-PHP/zmadminschool/img/logo.jpg"
              alt=""
            />
          </div>
          <div class="logotitle">
            <b>Z.M.INTERNATIONAL SCHOOL</b>
            <h4>zminternationalschool.com</h4>
          </div>
        </div>
      </Link>
      {isLoggedInn ? (
        <ul className="float-right inline-block">
          <li>
            <Link to="/admin/">Home</Link> ||{" "}
            <Link to="/admin/teachers">Teachers</Link> ||{" "}
            <Link to="/admin/students">Students</Link> ||{" "}
            <Link to="/admin/notice">Notice</Link> ||{" "}
            <Link to="/admin/magazine">Magazine</Link> ||{" "}
            <Link to="/admin/events">Events</Link> ||{" "}
            <Link to="/admin/result">Result</Link> ||{" "}
            <Link to="/">Main Site </Link> ||{" "}
            <span
              onClick={logoutAction}
              className="text-red-500 bold cursor-pointer"
            >
              Logout
            </span>
          </li>
        </ul>
      ) : (
        <ul className="float-right inline-block">
          <li>
            <Link to="/auth/login">Login</Link> ||{" "}
            <Link to="/auth/register">Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AdminHeader;
