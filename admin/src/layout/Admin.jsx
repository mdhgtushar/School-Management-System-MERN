import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../slices/authSlice";
import AdminHeader from "../inc/AdminHeader";

const Admin = () => {
  const isLoggedInn = useSelector(isLoggedIn);
  return (
    <div>
      {isLoggedInn ? (
        <>
          <AdminHeader /> <Outlet />
        </>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </div>
  );
};

export default Admin;
