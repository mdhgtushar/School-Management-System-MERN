import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Students = () => {
  //Declaring States
  const [students, setStudent] = useState([]);
  const [class_name, setClass] = useState([]);
  const [section, setSection] = useState([]);
  const [query, setQuery] = useState();
  const [section_name, setSection_name] = useState();

  //Assigning Values
  const blood_group = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  //Http Requests To Get Data
  const get_students = async () => {
    const data = await axios.get("http://localhost:5000/api/admin/student", {
      params: {
        class_name: query,
        section: section_name,
      },
    });
    setStudent(data.data);
  };
  const get_classs = async () => {
    const data = await axios.get("http://localhost:5000/api/admin/class");
    setClass(data.data);
  };
  const get_secton = async () => {
    const data = await axios.get("http://localhost:5000/api/admin/section");
    setSection(data.data);
  };

  //UseEffect Hook
  useEffect(() => {
    get_students();
    get_classs();
    get_secton();
  }, [query, section_name]);

  //Createing A Student
  const createStudent = async (e) => {
    e.preventDefault();
    const saveStudent = await axios.post(
      "http://localhost:5000/api/admin/student/create",
      {
        full_name: e.target.full_name.value,
        class_name: e.target.class_name.value,
        section: e.target.section.value,
        blood_group: e.target.blood_group.value,
      }
    );
    if (saveStudent) {
      alert(saveStudent.data.message);
      get_students();
    }
  };

  //Delete A student
  const deleteStudent = async (id) => {
    const deleteStudent = await axios.delete(
      "http://localhost:5000/api/admin/student/delete",
      {
        params: {
          id: id,
        },
      }
    );
    if (deleteStudent) {
      alert(deleteStudent.data.message);
      get_students();
    }
  };

  return (
    <>
      {/* Submit Student From */}
      <form action="" onSubmit={(e) => createStudent(e)}>
        <h2>Student's info</h2>
        <input type="text" placeholder="Full Name" name="full_name" />
        <select name="class_name" id="">
          <option value="null" disabled selected>
            Select Class Name
          </option>
          {class_name.map((class_n, key) => {
            return (
              <option key={key} value={class_n.class_name}>
                {class_n.class_name}
              </option>
            );
          })}
        </select>
        <select name="section" id="">
          <option value="null" disabled selected>
            Select Class Section
          </option>
          {section.map((section, key) => {
            return (
              <option key={key} value={section.section_name}>
                {section.section_name}
              </option>
            );
          })}
        </select>
        <select name="blood_group" id="">
          <option value="null" disabled selected>
            Select Class Blood Group
          </option>
          {blood_group.map((group, key) => (
            <option key={key} value={group}>
              {group}
            </option>
          ))}
        </select>
        <h2>Parents's info</h2>
        <input type="text" placeholder="Father's Name" />
        <input type="text" placeholder="Father's NID" />
        <input type="text" placeholder="Father's Phone" />
        <input type="text" placeholder="Father's Email" />
        <br />
        <input type="text" placeholder="Mother's Name" />
        <input type="text" placeholder="Mother's NID" />
        <input type="text" placeholder="Mother's Phone" />
        <input type="text" placeholder="Mother's Email" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <hr />

      {/* Filters Paramaters */}
      <div>
        <span
          onClick={() => {
            setQuery("");
            setSection_name("");
          }}
        >
          View All
        </span>
        {class_name.map((class_n, key) => {
          const data = section.map((section, key) => {
            return (
              <>
                <button
                  onClick={() => {
                    setQuery(class_n.class_name);
                    setSection_name(section.section_name);
                  }}
                >
                  {class_n.class_name} - {section.section_name}
                </button>{" "}
              </>
            );
          });
          return data;
        })}
      </div>
      <hr />

      {/* Showing Students List Table */}
      <p>
        Showing Result for:
        {query && section_name ? (
          <span>
            {query} {section_name}
          </span>
        ) : (
          "All Shwoing"
        )}
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Blood Group</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr>
              <td>{student.student?.full_name}</td>
              <td>{student.student?.class_name}</td>
              <td>{student.student?.section}</td>
              <td>{student.student?.blood_group}</td>
              <td>{student.parent?.father.full_name}</td>
              <td>{student.parent?.mother.full_name}</td>
              <td>
                <button
                  style={{ color: "red" }}
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="flex justify-between py-3 pl-2">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                  <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                    </div>
                    <div className="hidden sm:block">Filters</div>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-4">
                      <div className="flex items-center h-5">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 pl-4">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pl-4">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
