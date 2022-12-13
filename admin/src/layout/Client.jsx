import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../inc/Header";

const Client = () => {
  return (
    <>
      <Header />
      <div className="p-5">
        <Outlet />
      </div>
    </>
  );
};

export default Client;
