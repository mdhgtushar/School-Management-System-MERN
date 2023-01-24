import React from 'react';
import Teacher from '../../components/Student';

const Students = () => {
  return (
    <div className="w-full">
      <div className="bg-green-100 p-3">
        <b>Class One: </b>
      </div>
      <br />
      <div class="grid grid-cols-3 gap-4">
        <Teacher />
        <Teacher />
        <Teacher />
      </div>
      <br />
      <div className="bg-green-100 p-3">
        <b>Class Two: </b>
      </div>
      <br />
      <div class="grid grid-cols-3 gap-4">
        <Teacher />
        <Teacher />
        <Teacher />
      </div>
      <br />
      <div className="bg-green-100 p-3">
        <b>Class Two: </b>
      </div>
      <br />
      <div class="grid grid-cols-3 gap-4">
        <Teacher />
        <Teacher />
        <Teacher />
      </div>
    </div>
  );
};

export default Students;
