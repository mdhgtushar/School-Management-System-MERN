import React from 'react';
import site_settings from '../../Site';

const Result = () => {
  if (!site_settings.pages.result.view) {
    return <div>This page is unavilable</div>;
  }
  return (
    <div className="w-full">
      <div className="bg-green-100 p-3">
        <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
      </div>
      <div class="w-full">
        <form class=" bg-white py-5">
          <div className="flex justify-between mb-5">
            <div class="mr-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Select Class
              </label>
              <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="selectclass"
                type="text"
                placeholder="Examination"
              >
                <option value="" disabled selected>
                  Select Class
                </option>
                {site_settings.school.adminstration.classes.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="mr-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Select Year
              </label>
              <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Examination"
              >
                <option value="" disabled selected>
                  Select Year
                </option>
                {site_settings.school.adminstration.years.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="mr-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Select Exam
              </label>
              <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Examination"
              >
                <option value="" disabled selected>
                  Select exam
                </option>
                {site_settings.school.adminstration.exams.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>

            <div class="mr-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Regestration
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Regestration"
                autoComplete="off"
              />
            </div>
            <div class="mr-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Roll
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Roll"
                autoComplete="off"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-green-200 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-full">
        <div className="bg-green-100 p-3">
          <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
        </div>
        <div>
          <div>
            <table className="w-full table-auto ">
              <tbody>
                <tr>
                  <td>Roll No</td>
                  <td>207817</td>
                  <td>Name</td>
                  <td>HOBAYER GOLONDAZ TUSHAR</td>
                </tr>
                <tr>
                  <td>Reg. No</td>
                  <td>1921047672</td>
                  <td>Father's Name</td>
                  <td>MONZIL GOLONDAZ</td>
                </tr>
                <tr>
                  <td>Group</td>
                  <td>SCIENCE</td>
                  <td>Mother's Name</td>
                  <td>JESMIN NAHAR</td>
                </tr>
                <tr>
                  <td>Session</td>
                  <td>2020-21</td>
                  <td>Passing Year</td>
                  <td>2022</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>REGULAR</td>
                  <td>Institute</td>
                  <td>GAFARGAON ISLAMIA GOVT. HIGH SCHOOL(111523)</td>
                </tr>
                <tr>
                  <td>Result</td>
                  <td>GPA=5.00</td>
                  <td>Center</td>
                  <td>gafargaon-2</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-green-100 p-3">
              <h3>Grade Sheet</h3>
            </div>

            <table className="w-full">
              <tbody>
                <tr>
                  <th>Subject</th>
                  <th>Paper</th>
                  <th>Theory</th>
                  <th>MCQ</th>
                  <th>Practical</th>
                  <th>Total Mark</th>
                  <th>Grade</th>
                </tr>
                <tr>
                  <td className="subname">Bangla</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>168</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">English</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>178</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">Mathematics</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>092</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">Bangladesh And Global Studies</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>081</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">Islam &amp; Moral Education</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>087</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">Physics</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>089</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">Chemistry</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>087</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">Higher Mathematics</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>091</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">Information &amp; Communication Technology</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>043</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">Biology</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>092</td>
                  <td>A+</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-green-100 p-3">
              <h3>Grade Sheet (Continuous Assessment)</h3>
            </div>
            <table className="w-full">
              <tbody>
                <tr>
                  <th>Subject</th>
                  <th>Paper</th>
                  <th>Theory</th>
                  <th>MCQ</th>
                  <th>Practical</th>
                  <th>Total Mark</th>
                  <th>Grade</th>
                </tr>
                <tr>
                  <td className="subname">Physical Education, Health &amp; Sports</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>098</td>
                  <td>A+</td>
                </tr>
                <tr>
                  <td className="subname">Career Education</td>
                  <td>1st</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>049</td>
                  <td>A+</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-end p-3">
              <div>
                <img
                  className="w-12"
                  src="http://mymensinghboard.webbaseapplication.com/resultmb/sign.png"
                  alt=""
                />
                ( Md. Shamsul Islam)
                <br />
                Controller of Examinations
              </div>
            </div>
          </div>

          <div>
            <input
              type="button"
              onclick="print_result()"
              defaultValue="Print"
              className="submit"
              style={{ fontFamily: 'Arial, Bangla744, sans-serif' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
