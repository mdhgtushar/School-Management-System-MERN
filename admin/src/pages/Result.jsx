import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Result = () => {
  const [register, setRegister] = useState("");
  const [roll, setRoll] = useState("");
  const [className, setClassName] = useState("");
  const [showdata, setShowdata] = useState();
  const [class_name, setClass] = useState([]);

  const get_classs = async () => {
    const data = await axios.get("http://localhost:5000/api/admin/class");
    setClass(data.data);
  };
  useEffect(() => {
    get_classs();
  }, []);
  const studentResult = (e) => {
    e.preventDefault();
    if (register && roll) {
      setShowdata(
        <div>
          <p>Register: {register}</p>
          <p>Roll: {roll}</p>
        </div>
      );
    } else {
      alert("Filed Must not be empty!");
    }
  };

  const classResult = (e) => {
    e.preventDefault();
    if (className) {
      setShowdata(
        <div>
          <p>className: {className}</p>
        </div>
      );
    } else {
      alert("Filed Must not be empty!");
      window.print();
    }
  };

  const class_select_box = class_name.map((class_n, key) => {
    return <option value={class_n.class_name}>{class_n.class_name}</option>;
  });
  return (
    <div>
      <div className="form">
        <form action="" onSubmit={(e) => studentResult(e)}>
          <h2>Student Result</h2>
          <input
            type="text"
            placeholder="Student Register Id"
            onChange={(e) => setRegister(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Student Roll Number"
            onChange={(e) => setRoll(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
        <form action="" onSubmit={(e) => classResult(e)}>
          <h2>Class Result</h2>

          <select onChange={(e) => setClassName(e.target.value)}>
            <option value="null" disabled selected>
              Select Class Name
            </option>
            {class_select_box}
          </select>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
      <hr />
      {showdata}
    </div>
  );
};

export default Result;
