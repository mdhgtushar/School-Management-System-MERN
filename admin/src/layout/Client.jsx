import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../inc/Footer';
import Header from '../inc/Header';

const Client = () => {
  return (
    <>
      <Header />
      <div className="container flex justify-between mx-auto py-5">
        <Outlet />

        <div className="w-96 px-3">
          <div className="bg-gray-100 px-3 py-5">
            <div>
              <b>Contact info</b>
              <p>Email: zzmism2020@gmail.com</p>
              <p>Phone: +8801712498815</p>
            </div>
            <br />
            <div>
              <b>Campas Address</b>
              <p>SHAHID MINAR ROAD, NATUN BAZAR</p>
              <p>BIRAMPUR, DINAJPUR.</p>
            </div>
            <br />
            <div>
              <b>Admission Fee</b>
              <p>500/- (Play-Two)</p>
              <p>700/- (Three-Five)</p>
            </div>
            <br />
            <div>
              <b>Monthly Fee</b>
              <p>500/- (Play-Narcery)</p>
              <p>700/- (Two-Three)</p>
              <p>1000/- (Four-Five)</p>
            </div>
            <br />
            <div>
              <b>Class time</b>
              <p>08:00am-10:15am (Play - Two)</p>
              <p>10:15am-02:15pm (Three - Five)</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Client;
