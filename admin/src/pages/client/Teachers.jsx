import React from "react";
import Teacher from "../../components/Teacher";

const Teachers = () => {
  return (
    <div className="w-full">
      <div className="bg-green-100 p-3">
        <h2>Z.M.INTERNATIONAL SCHOOL TEACHERS LIST</h2>
      </div>
      <br />
      <div class="grid grid-cols-1 gap-4">
        <Teacher />
        <Teacher />
        <Teacher />
        <Teacher />
        <Teacher />
        <Teacher />
        <Teacher />
        <Teacher />
        <Teacher />
      </div>
    </div>
  );
};

export default Teachers;
