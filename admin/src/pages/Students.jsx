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
    </>
  );
};

export default Students;
