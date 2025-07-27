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
        <h2>Z.M. INTERNATIONAL SCHOOL TEACHERS LIST</h2>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-gray-700">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading teachers...
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-600">
            Failed to load teachers
          </div>
        ) : (
          data?.map((teacher, index) => (
            <Teacher key={teacher._id || index} info={teacher} />
          ))
        )}
      </div>
    </div>
  );
};

export default Teachers;
