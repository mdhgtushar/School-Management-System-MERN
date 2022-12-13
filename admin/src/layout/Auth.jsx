import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../slices/authSlice";

const Auth = () => {
  const isLoggedInn = useSelector(isLoggedIn);
  return (
    <div className="p-5">
      <div>{!isLoggedInn ? <Outlet /> : <Navigate to="/" />}</div>
    </div>
  );
};

export default Auth;
