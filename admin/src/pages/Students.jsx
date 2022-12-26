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
      <div className="bg-green-100 p-3 mb-5">
        <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
      </div>
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

      <div className="bg-green-100 p-3 mb-5">
        <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
      </div>

      {/* Filters Paramaters */}
      <div className="mb-2">
        <span
          className="bg-green-200 hover:text-gray-600 text-black m-1 px-2 rounded focus:outline-none focus:shadow-outline"
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
              <button
                className="bg-green-100 hover:text-gray-600 text-black m-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  setQuery(class_n.class_name);
                  setSection_name(section.section_name);
                }}
              >
                {class_n.class_name} - {section.section_name}
              </button>
            );
          });
          return data;
        })}
      </div>
      {/* Showing Students List Table */}
      <p
        className="mb-5 px-2
      text-xs font-bold text-left text-gray-500 "
      >
        Showing Result for:{" "}
        {query && section_name ? (
          <span>
            {query} {section_name}
          </span>
        ) : (
          " All Shwoing"
        )}
      </p>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="w-full inline-block align-middle">
            <div className="overflow-hidden border">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-50">
                  <tr>
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
                      Class
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Section
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Blood Group
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
                  {students.map((student, key) => (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {++key}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {student.student?.full_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {student.student?.class_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {student.student?.section}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {student.student?.blood_group}
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
                        <a
                          className="text-red-500 hover:text-red-700"
                          href="#"
                          onClick={() => deleteStudent(student._id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
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
