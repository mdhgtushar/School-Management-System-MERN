import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [success, setSuccess] = useState();
  const get_teachers = async () => {
    const data = await axios.get("http://localhost:5000/api/admin/teacher");
    setTeachers(data.data);
  };
  const submit_teacher = async (e) => {
    e.preventDefault();

    const full_name = e.target.full_name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const education = e.target.education.value;
    const subject = e.target.subject.value;
    const blood_group = e.target.blood_group.value;
    const description = e.target.description.value;

    const submit = await axios.post(
      "http://localhost:5000/api/admin/teacher/create",
      {
        full_name,
        email,
        phone,
        education,
        subject,
        blood_group,
        description,
      }
    );
    if (submit) {
      alert(submit.data.message);
      get_teachers();
    }
  };
  const deleteData = async (id) => {
    const delteData = await axios.delete(
      "http://localhost:5000/api/admin/teacher/delete",
      {
        params: {
          id: id,
        },
      }
    );
    if (delteData) {
      alert(delteData.data.message);
      get_teachers();
      showSuccess("Successfully Deleted");
    }
  };

  const showSuccess = (message) => {
    setSuccess(
      <div
        style={{
          border: "1px solid green",
          padding: "5px",
          margin: "15px",
          position: "fixed",
          right: "0",
          top: "0",
          background: "white",
        }}
      >
        <p style={{ color: "green" }}>
          {message} <button onClick={() => setSuccess("")}>-</button>
        </p>
      </div>
    );
  };
  useEffect(() => {
    get_teachers();
  }, []);

  const teachers_list = teachers.map((teacher, key) => {
    return (
      <tr key={key}>
        <td>{teacher.full_name}</td>
        <td>{teacher.email}</td>
        <td>{teacher.phone}</td>
        <td>{teacher.education}</td>
        <td>{teacher.subject}</td>
        <td>{teacher.blood_group}</td>
        <td>{teacher.description}</td>
        <td>
          <button
            onClick={() => deleteData(teacher._id)}
            style={{ color: "red" }}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      {success}
      <form action="" onSubmit={(e) => submit_teacher(e)}>
        <h2>Teacher's info</h2>
        <input type="text" placeholder="Full Name" name="full_name" />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Phone" name="phone" />
        <input type="text" placeholder="Education" name="education" />
        <input type="text" placeholder="Subject" name="subject" />
        <input type="text" placeholder="Blood Group" name="blood_group" />
        <input name="description" placeholder="Description"></input>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Education</th>
            <th>Subject</th>
            <th>Blood Group</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{teachers_list}</tbody>
      </table>
    </div>
  );
};

export default Teachers;
