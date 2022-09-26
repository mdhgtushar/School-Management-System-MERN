import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Students = () => {
  const [students, setStudent] = useState([]);
  const [class_name, setClass] = useState([]);
  const [section, setSection] = useState([]);
  const [blood_group, setBlood_group] = useState([
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ]);
  const get_students = async () => {
    const data = await axios.get("http://localhost:5000/api/admin/student");
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
  useEffect(() => {
    get_students();
    get_classs();
    get_secton();
  }, []);
  const createStudent = async (e) => {
    e.preventDefault();
    const saveStudent = await axios.post(
      "http://localhost:5000/api/admin/student/create",
      {
        student_id: Math.random(),
        student: {
          full_name: "hello Student",
        },
      }
    );
    if (saveStudent) {
      alert(saveStudent.data.message);
      get_students();
    }
  };
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
  const students_list = students.map((student, key) => {
    return (
      <tr key={key}>
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
    );
  });
  const class_select_box = class_name.map((class_n, key) => {
    return <option value={class_n.class_name}>{class_n.class_name}</option>;
  });
  const section_select_list = section.map((section, key) => {
    return <option value={section.section_name}>{section.section_name}</option>;
  });
  const blood_group_select_list = blood_group.map((group, key) => {
    return <option value={group}>{group}</option>;
  });
  return (
    <div>
      <form action="" onSubmit={(e) => createStudent(e)}>
        <h2>Student's info</h2>
        <input type="text" placeholder="Full Name" name="full_name" />
        <select name="" id="">
          <option value="null" disabled selected>
            Select Class Name
          </option>
          {class_select_box}
        </select>
        <select name="section" id="">
          <option value="null" disabled selected>
            Select Class Section
          </option>
          {section_select_list}
        </select>
        <select name="blood_group" id="">
          <option value="null" disabled selected>
            Select Class Blood Group
          </option>
          {blood_group_select_list}
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
        <input type="submit" value="Submit" />
      </form>
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

        {students_list.length > 0 ? (
          <tbody>{students_list}</tbody>
        ) : (
          <tbody>
            <tr>
              <td>"Something wrong.."</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Students;
