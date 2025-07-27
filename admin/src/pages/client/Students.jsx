import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Student from '../../components/Student';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students data
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/admin/student");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Group students by class
  const groupStudentsByClass = () => {
    const grouped = {};
    students.forEach(student => {
      const className = student.student?.class_name || 'Unassigned';
      if (!grouped[className]) {
        grouped[className] = [];
      }
      grouped[className].push(student);
    });
    return grouped;
  };

  const groupedStudents = groupStudentsByClass();

  return (
    <div className="w-full">
      {loading ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-gray-700">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading students...
          </div>
        </div>
      ) : (
        Object.keys(groupedStudents).map((className) => (
          <div key={className}>
            <div className="bg-green-100 p-3">
              <b>{className}: </b>
              <span className="text-sm text-gray-600">({groupedStudents[className].length} students)</span>
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupedStudents[className].map((student) => (
                <Student 
                  key={student._id}
                  info={{
                    id: student._id,
                    name: student.student?.full_name || 'Student Name',
                    class: student.student?.class_name || 'N/A',
                    section: student.student?.section || 'N/A',
                    bloodGroup: student.student?.blood_group || 'N/A',
                    fatherName: student.father?.father_name || 'N/A',
                    motherName: student.mother?.mother_name || 'N/A',
                    fatherPhone: student.father?.father_phone || 'N/A',
                    motherPhone: student.mother?.mother_phone || 'N/A'
                  }}
                />
              ))}
            </div>
            <br />
          </div>
        ))
      )}
    </div>
  );
};

export default Students;
