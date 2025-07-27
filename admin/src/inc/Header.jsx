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
    <header className="shadow bg-white">
      {/* Top Bar */}
      <div className="bg-slate-100 border-b border-slate-200 text-sm text-slate-700">
        <div className="container mx-auto flex justify-between items-center py-1 px-4">
          <div>
            <span className="font-medium">Email:</span> {site_settings.school.info.email}
            <span className="mx-2">|</span>
            <span className="font-medium">Mob:</span> {site_settings.school.info.phone}
          </div>
          <div>
            <a
              className="text-green-700 hover:text-green-900 font-semibold transition"
              href="https://mdhgtushar.github.io/"
              target="_blank"
              rel="Hobayer Golondaz Tushar"
            >
              Developer
            </a>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img className="h-16 w-16 object-contain" src={site_settings.school.logo} alt="School Logo" />
          <div className="ml-2">
            <div className="text-xl font-bold text-green-900 leading-tight">{parse(site_settings.school.title[language])}</div>
            <div className="text-sm text-slate-500">{parse(site_settings.school.short_description[language])}</div>
          </div>
        </Link>
        <a href="admit.php" className="hidden sm:block ml-6">
          <img
            className="h-16 rounded shadow-md border border-slate-200"
            src="https://nbpi.edu.np/wp-content/uploads/2021/08/admission-open.gif"
            alt="Admit"
          />
        </a>
      </div>
      {/* Navigation Bar */}
      <nav className="bg-green-800 border-t border-b border-green-900">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-between items-center py-2 m-0">
            <li className="flex flex-wrap gap-2 items-center">
              <Link
                to="/"
                className="px-4 py-1 rounded bg-green-700 text-white font-medium hover:bg-green-900 transition shadow-sm"
              >
                Home
              </Link>
              <Link
                to="/teachers"
                className="px-4 py-1 rounded bg-slate-200 text-green-900 font-medium hover:bg-green-100 hover:text-green-800 transition"
              >
                Teachers
              </Link>
              <Link
                to="/students"
                className="px-4 py-1 rounded bg-slate-200 text-green-900 font-medium hover:bg-green-100 hover:text-green-800 transition"
              >
                Students
              </Link>
              <Link
                to="/notice"
                className="px-4 py-1 rounded bg-slate-200 text-green-900 font-medium hover:bg-green-100 hover:text-green-800 transition"
              >
                Notice
              </Link>
              {/* <Link
                to="/magazine"
                className="px-4 py-1 rounded bg-slate-200 text-green-900 font-medium hover:bg-green-100 hover:text-green-800 transition"
              >
                Magazine
              </Link> */}
              <Link
                to="/result"
                className="px-4 py-1 rounded bg-slate-200 text-green-900 font-medium hover:bg-green-100 hover:text-green-800 transition"
              >
                Result
              </Link>
            </li>
            <li>
              {isLoggedInn ? (
                <button
                  onClick={logoutAction}
                  className="px-4 py-1 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-sm"
                >
                  Logout
                </button>
              ) : (
                <span className="space-x-2">
                  <Link
                    to="/auth/login"
                    className="px-3 py-1 rounded bg-green-600 text-white font-medium hover:bg-green-800 transition"
                  >
                    Login
                  </Link>
                  <span className="text-slate-300">|</span>
                  <Link
                    to="/auth/register"
                    className="px-3 py-1 rounded bg-green-600 text-white font-medium hover:bg-green-700 transition"
                  >
                    Register
                  </Link>
                </span>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
