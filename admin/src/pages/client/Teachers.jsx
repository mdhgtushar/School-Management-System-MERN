import React from 'react';
import Teacher from '../../components/Teacher';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, teacherSliceData } from '../../slices/teacherSlice';
import { useEffect } from 'react';

const Teachers = () => {
  const { data, error, loading } = useSelector(teacherSliceData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="w-full">
      <div className="bg-green-100 p-3">
        <h2>Z.M.INTERNATIONAL SCHOOL TEACHERS LIST</h2>
      </div>
      <br />
      <div class="grid grid-cols-1 gap-4">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Faild to load teachers</div>
        ) : (
          data?.map((teacher) => {
            return <Teacher info={teacher} />;
          })
        )}
      </div>
    </div>
  );
};

export default Teachers;
