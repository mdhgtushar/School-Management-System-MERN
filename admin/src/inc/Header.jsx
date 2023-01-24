import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn, logOut } from '../slices/authSlice';
import site_settings from '../Site';
import parse from 'html-react-parser';

const Header = () => {
  const language = 'en';
  const isLoggedInn = useSelector(isLoggedIn);
  const dispatch = useDispatch();
  const logoutAction = () => {
    const is_confirmed = window.confirm('Are You Sure? You Want to Logout');
    is_confirmed ? dispatch(logOut()) : alert('Thank Your for Staying');
  };
  return (
    <div>
      <div class=" bg-gray-100 p-2">
        <div class="container mx-auto flex justify-between">
          <div class="">
            <p>
              Email: {site_settings.school.info.email} || Mob: {site_settings.school.info.phone}
            </p>
          </div>
          <div class="nav1right">
            <a class="fl-r" href="https://www.facebook.com/md.hg.tushar/" target="blank">
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
                <img className="h-20 w-20" src={site_settings.school.logo} alt="" />
              </div>
              <div class="logotitle">
                <b>{parse(site_settings.school.title[language])}</b>
                <h4>{parse(site_settings.school.short_description[language])}</h4>
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
      <div className="bg-gray-200 overflow-hidden p-1">
        <div className="container mx-auto">
          <ul className="flex justify-between font-bold items-center m-0 overflow-hidden">
            <li className="flex justify-between items-center">
              <Link to="/" className="px-5 py-1 hover:text-gray-500 bg-gray-300 text-white mr-1">
                Home
              </Link>{' '}
              <Link
                to="/teachers"
                className="px-5 py-1 hover:text-gray-500 bg-gray-300 text-white mr-1"
              >
                Teachers
              </Link>{' '}
              <Link
                to="/students"
                className="px-5 py-1 hover:text-gray-500 bg-gray-300 text-white mr-1"
              >
                Students
              </Link>{' '}
              <Link
                to="/notice"
                className="px-5 py-1 hover:text-gray-500 bg-gray-300 text-white mr-1"
              >
                Notice
              </Link>{' '}
              <Link
                to="/result"
                className="px-5 py-1 hover:text-gray-500 bg-gray-300 text-white mr-1"
              >
                Result
              </Link>{' '}
            </li>
            <li>
              {isLoggedInn && (
                <span onClick={logoutAction} className="text-red-500 bold cursor-pointer">
                  Logout
                </span>
              )}
              {!isLoggedInn && (
                <span>
                  <Link to="/auth/login"> Login</Link> || <Link to="/auth/register"> Register</Link>
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
