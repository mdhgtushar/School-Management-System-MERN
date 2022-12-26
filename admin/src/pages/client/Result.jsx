import React from "react";

const Result = () => {
  return (
    <div className="w-full">
      <div className="bg-green-100 p-3">
        <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
      </div>
      <div class="w-full">
        <form class=" bg-white py-5">
          <div className="flex justify-between mb-5">
            <div class="mr-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Examination
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Examination"
              />
            </div>
            <div class="mr-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Year
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Year"
              />
            </div>
            <div class="mr-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Regestration
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Regestration"
              />
            </div>
            <div class="mr-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Roll
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Roll"
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
    </div>
  );
};

export default Result;
