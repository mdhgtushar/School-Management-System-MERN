import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn, logOut } from "../slices/authSlice";

const Header = () => {
  const isLoggedInn = useSelector(isLoggedIn);
  const dispatch = useDispatch();
  const logoutAction = () => {
    const is_confirmed = window.confirm("Are You Sure? You Want to Logout");
    is_confirmed ? dispatch(logOut()) : alert("Thank Your for Staying");
  };
  return (
    <div>
      <div class=" bg-green-100 p-2">
        <div class="container mx-auto flex justify-between">
          <div class="">
            <p>Email: zzmism2020@gmail.com || Mob: +8801712498815</p>
          </div>
          <div class="nav1right">
            <a
              class="fl-r"
              href="https://www.facebook.com/md.hg.tushar/"
              target="blank"
            >
              Developer
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <Link to="/">
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
          <a href="admit.php" class="smnone">
            <img
              className="h-20"
              src="http://localhost/ZM-International-School-PHP/zmadminschool/img/shivam.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="bg-green-100 overflow-hidden p-3">
        <div className="container mx-auto">
          <ul>
            <li>
              <Link to="/">Home</Link> || <Link to="/teachers">Teachers</Link>{" "}
              || <Link to="/students">Students</Link> ||{" "}
              <Link to="/notice">Notice</Link> ||{" "}
              <Link to="/magazine">Magazine</Link> ||{" "}
              <Link to="/events">Events</Link> ||{" "}
              <Link to="/result">Result</Link> ||{" "}
              <Link to="/admin">Admin Panel</Link> ||{" "}
              {isLoggedInn && (
                <span
                  onClick={logoutAction}
                  className="text-red-500 bold cursor-pointer"
                >
                  Logout
                </span>
              )}
              {!isLoggedInn && (
                <span>
                  <Link to="/auth/login"> Login</Link> ||{" "}
                  <Link to="/auth/register"> Register</Link>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
