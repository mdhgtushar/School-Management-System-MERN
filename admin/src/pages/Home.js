import React from "react";
import Teacher from "../components/Teacher";

const Home = () => {
  return (
    <div className="w-full">




      <div className="flex pb-5">
        <div className="flex-1 pr-2">
          <div className="bg-green-100 p-3">
            <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
          </div>
          <div className="py-3 px-2 flex justify-between">
            <div className="">
              <b>Admin Features</b>
              <ol>
                <li>Teacher: List, view, Create, Update, Delete </li>
                <li>Student: List, view, Create, Update, Delete </li>
                <li>Notice: List, view, Create, Update, Delete </li>
                <li>Magazine: List, view, Create, Update, Delete </li>
                <li>Event: List, view, Create, Update, Delete </li>
                <li>Result: List, view, Create, Update, Delete </li>
                <li>Class: List, view, Create, Update, Delete </li>
                <li>Section: List, view, Create, Update, Delete </li>
                <li>Subject: List, view, Create, Update, Delete </li>
              </ol>
            </div>
            <div>
              <b>Client Features</b>
              <ul>
                <li>Home Page</li>
                <li>Teacher: List and Single view</li>
                <li>Student: List and Single view</li>
                <li>Notice: List and Single view</li>
                <li>Magazine: List and Single view</li>
                <li>Event: List and Single view</li>
                <li>Result: List and Single view</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-2 bg-green-100 text-center">
          <img className="w-72" src="http://localhost/ZM-International-School-PHP/zmadminschool/img/1.jpg" alt="" />
          <h2>Z.M.INTERNATIONAL SCHOOL</h2>
          <p>Principal</p>
        </div>
      </div>


      <div className="mb-5">
        <div className="bg-green-100 p-3 mb-3">
          <h2>Z.M.INTERNATIONAL SCHOOL TEACHERS LIST</h2>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <Teacher />
          <Teacher />
          <Teacher />
        </div>
      </div>


      <div className="mb-5">
        <div className="bg-green-100 p-3 mb-3">
          <h2>Z.M.INTERNATIONAL SCHOOL Features </h2>
        </div>
        <div>
          <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Home;
