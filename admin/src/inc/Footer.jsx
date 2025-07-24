import React from 'react';
import { Link } from 'react-router-dom';
import site_settings from '../Site';
import parse from 'html-react-parser';

const Footer = () => {
  const language = 'en';
  return (
    <footer className="shadow bg-slate-50 mt-10 text-slate-900">
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
              className="text-blue-700 hover:text-blue-900 font-semibold transition"
              href="https://www.facebook.com/md.hg.tushar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer
            </a>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start py-8 px-4 gap-8">
        {/* Logo and Info */}
        <div className="flex-1 min-w-[220px]">
          <div className="flex items-center mb-3">
            <img className="h-16 w-16 object-contain" src={site_settings.school.logo} alt="School Logo" />
            <div className="ml-2">
              <div className="text-lg font-bold text-blue-900 leading-tight">{parse(site_settings.school.title[language])}</div>
              <div className="text-sm text-slate-500">{parse(site_settings.school.short_description[language])}</div>
            </div>
          </div>
          <div className="text-slate-700 text-sm mb-2">
            <b>School Address:</b>
            <div>{parse(site_settings.school.info.address)}</div>
          </div>
          <div className="text-slate-700 text-sm">
            <b>Contact info:</b>
            <div>Email: {parse(site_settings.school.info.email)}</div>
            <div>Mob: {parse(site_settings.school.info.phone)}</div>
          </div>
        </div>
        {/* Menu */}
        <div className="flex-1 min-w-[180px]">
          <div className="font-semibold text-blue-900 mb-2">Menu</div>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-blue-700 hover:underline hover:text-blue-900 transition">Home</Link>
            </li>
            <li>
              <Link to="/teachers" className="text-blue-700 hover:underline hover:text-blue-900 transition">Teachers</Link>
            </li>
            <li>
              <Link to="/students" className="text-blue-700 hover:underline hover:text-blue-900 transition">Students</Link>
            </li>
            <li>
              <Link to="/magazine" className="text-blue-700 hover:underline hover:text-blue-900 transition">School Magazine</Link>
            </li>
            <li>
              <Link to="/gallery" className="text-blue-700 hover:underline hover:text-blue-900 transition">School Gallery</Link>
            </li>
            <li>
              <Link to="/admit" className="text-blue-700 hover:underline hover:text-blue-900 transition">Admission</Link>
            </li>
            <li>
              <Link to="/notice" className="text-blue-700 hover:underline hover:text-blue-900 transition">Notice Board</Link>
            </li>
          </ul>
        </div>
        {/* Important Links */}
        <div className="flex-1 min-w-[180px]">
          <div className="font-semibold text-blue-900 mb-2">Important Links</div>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-blue-700 hover:underline hover:text-blue-900 transition">Home</a>
            </li>
            <li>
              <a href="/teachers" className="text-blue-700 hover:underline hover:text-blue-900 transition">Teachers</a>
            </li>
            <li>
              <a href="/students" className="text-blue-700 hover:underline hover:text-blue-900 transition">Students</a>
            </li>
            <li>
              <a href="/magazine" className="text-blue-700 hover:underline hover:text-blue-900 transition">School Magazine</a>
            </li>
            <li>
              <a href="/gallery" className="text-blue-700 hover:underline hover:text-blue-900 transition">School Gallery</a>
            </li>
            <li>
              <a href="/admit" className="text-blue-700 hover:underline hover:text-blue-900 transition">Admission</a>
            </li>
            <li>
              <Link to="/admin" className="text-blue-700 hover:underline hover:text-blue-900 transition">Admin Panel</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-slate-100 border-t border-slate-200 p-4 text-center text-slate-500 text-sm">
        All © copyright reserved || This site is developed by Md Hg Tushar
      </div>
    </footer>
  );
};

export default Footer;
