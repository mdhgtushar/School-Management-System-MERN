import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../slices/authSlice";
import AdminHeader from "../inc/AdminHeader";

const Admin = () => {
  const isLoggedInn = useSelector(isLoggedIn);

  return (
    <div>
      {isLoggedInn ? (
        <div className="flex">
          <div className="p-5 w-96 h-screen bg-green-100 overflow-scroll">
            <AdminHeader />
          </div>
          <div className="flex-1 h-screen overflow-scroll">
            <div className="overflow-hidden p-5">
              <h2 className="float-left">
                <Link to="/admin">
                  Modern school V1.0
                  <small>
                    <b>(Admin.beta)</b>
                  </small>
                </Link>
              </h2>
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
            <hr />
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </div>
  );
};

export default Admin;
