import React from "react";

const Magazine = () => {
  return (
    <div className="w-full">
      <div className="bg-green-100 p-3 mb-5">
        <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white border border-gray-200 rounded-lg mb-5">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5 ">
            <a href="#">
              <h5 class="text-gray-900  hover:text-green-400 font-bold text-2xl tracking-tight mb-2">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
