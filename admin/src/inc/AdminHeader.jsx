import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn, logOut } from '../slices/authSlice';
import MenuButton from '../components/MenuButton1';

const AdminHeader = () => {
  const isLoggedInn = useSelector(isLoggedIn);
  const dispatch = useDispatch();
  const logoutAction = () => {
    const is_confirmed = window.confirm('Are You Sure? You Want to Logout');
    is_confirmed ? dispatch(logOut()) : alert('Thank Your for Staying');
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
        <nav>
          <p className="w-full border-b-2 pt-2 border-gray-400 mt-4 text-md font-normal">
            Dashboard
          </p>
          <MenuButton active={true} btn={1} goLink={'/admin'} title="DASHBORD" />
          <div>
            <p className="w-full border-b-2 pt-2 border-gray-400 mt-4 text-md font-normal">
              Modules
            </p>

            <MenuButton active={false} btn={2} goLink={'/admin/teachers'} title="Teachers" />
            <MenuButton active={false} btn={2} goLink={'/admin/students'} title="Students" />
            <MenuButton active={false} btn={2} goLink={'/admin/notice'} title="Notice" />

            <MenuButton active={false} btn={2} goLink={'/admin/result'} title="Result" />
            <p className="w-full border-b-2 pt-2 border-gray-400 mt-4 text-md font-normal">
              Action
            </p>
            <div onClick={logoutAction}>
              <MenuButton active={false} btn={2} goLink={'#'} title="Logout" />
              <MenuButton active={false} btn={2} goLink={'/'} title="Main Site " />
            </div>
          </div>
        </nav>
      ) : (
        <ul className="float-right inline-block">
          <li>
            <Link to="/auth/login">Login</Link> || <Link to="/auth/register">Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AdminHeader;
