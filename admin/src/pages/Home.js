import React from "react";
import Teacher from "../components/Teacher";
import site_settings from "../Site";
import parse from 'html-react-parser';

const Home = () => {
  const language = 'en';

  if (!site_settings.pages.home.view) {
    return <div>This page is unavilable</div>
  }
  return (
    <div className="w-full">



      {site_settings.pages.home.blocks.principal_speech && <div className="flex pb-5">
        <div className="flex-1 pr-2">
          <div className="bg-gray-200 p-3">
            <h2 className="text-xl">{site_settings.blocks.principal_speech.title_1[language]}</h2>
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
        <div className="p-2 bg-gray-200 text-center">
          <img className="w-72" src="http://localhost/ZM-International-School-PHP/zmadminschool/img/1.jpg" alt="" />
          <h2>Z.M.INTERNATIONAL SCHOOL</h2>
          <p>Principal</p>
        </div>
      </div>}

      {site_settings.pages.home.blocks.featured_teacher_list &&
        <div className="mb-5">
          <div className="bg-gray-200 p-3 mb-3">
            <h2>{site_settings.blocks.featured_teacher_list.title_1[language]}</h2>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <Teacher />
            <Teacher />
            <Teacher />
          </div>
        </div>}
      {site_settings.pages.home.blocks.features &&
        <div className="mb-5">
          <div className="bg-gray-200 p-3 mb-3">
            <h2>{site_settings.blocks.features.title_1[language]}</h2>
          </div>
          <div>
            <ul>
              {site_settings.blocks.features.description_1[language].map((data) => {
                return <li>{parse(data)}</li>
              })}
            </ul>
          </div>
        </div>
      }




    </div>
  );
};

export default Home;
