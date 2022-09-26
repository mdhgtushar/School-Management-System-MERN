import axios from "axios";
import React, { useEffect, useState } from "react";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  const get_notice = async () => {
    const data = await axios.get("http://localhost:5000/api/admin/magazine");
    setNotice(data.data);
  };
  useEffect(() => {
    get_notice();
  }, []);
  const notice_list = notice.map((teacher, key) => {
    return (
      <tr key={key}>
        <td>{teacher._id}</td>
        <td>{teacher.title}</td>
        <td>{teacher.body}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>{notice_list}</tbody>
      </table>
    </div>
  );
};

export default Notice;
