import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, teacherSliceData } from '../slices/teacherSlice';

const Teachers = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(teacherSliceData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const [success, setSuccess] = useState();

  const submit_teacher = async (e) => {
    e.preventDefault();

    const full_name = e.target.full_name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const education = e.target.education.value;
    const subject = e.target.subject.value;
    const blood_group = e.target.blood_group.value;
    const description = e.target.description.value;

    const submit = await axios.post('http://localhost:5000/api/admin/teacher/create', {
      full_name,
      email,
      phone,
      education,
      subject,
      blood_group,
      description
    });
    if (submit) {
      alert(submit.data.message);
      dispatch(fetchData());
    }
  };
  const deleteData = async (id) => {
    const delteData = await axios.delete('http://localhost:5000/api/admin/teacher/delete', {
      params: {
        id: id
      }
    });
    if (delteData) {
      alert(delteData.data.message);
      showSuccess('Successfully Deleted');
    }
  };

  const showSuccess = (message) => {
    setSuccess(
      <div
        style={{
          border: '1px solid green',
          padding: '5px',
          margin: '15px',
          position: 'fixed',
          right: '0',
          top: '0',
          background: 'white'
        }}
      >
        <p style={{ color: 'green' }}>
          {message} <button onClick={() => setSuccess('')}>-</button>
        </p>
      </div>
    );
  };

  return (
    <div>
      {success}
      <div class="w-full">
        <div className="bg-green-100 p-3">
          <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
        </div>
        <form class=" bg-white py-5" onSubmit={(e) => submit_teacher(e)}>
          <div class="grid grid-cols-3 gap-6 mb-5">
            <div class="">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Full Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="User Name"
                name="full_name"
              />
            </div>
            <div class="">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>
            <div class="">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                Phone
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Phone"
                name="phone"
              />
            </div>
            <div class="">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="education">
                Education
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="education"
                type="text"
                placeholder="Education"
                name="education"
              />
            </div>
            <div class="">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="subject">
                Subject
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="subject"
                name="subject"
              />
            </div>

            <div class="">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="blood_group">
                Blood Group
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="blood_group"
                type="text"
                placeholder="Blood Group"
                name="blood_group"
              />
            </div>

            <div class="">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="description"
                placeholder="Description"
              >
                Description
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="description"
                name="description"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-green-200 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="bg-green-100 p-3 mb-5">
        <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-scroll">
          <div className="w-full inline-block align-middle">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead className="bg-green-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Education
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Subject
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Blood Group
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div>Faild to load teachers</div>
                ) : (
                  data?.map((teacher, key) => {
                    return (
                      <tr key={key}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {++key}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher.full_name}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher.email}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher.phone}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher.education}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher.subject}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher.blood_group}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {teacher.description}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a className="text-green-500 hover:text-green-700" href="#">
                            Edit
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="#"
                            onClick={() => deleteData(teacher._id)}
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
