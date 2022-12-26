import React from "react";

const Events = () => {
  return (
    <div className="w-full p-2">
      <div className="bg-green-100 p-3 mb-5">
        <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
      </div>
      <div className="pb-5">
        <div class="lg:flex border border-gray-400">
          <div class="bg-green-300 border border-gray-400 lg:w-2/12 py-4 block h-full shadow-inner">
            <div class="text-center tracking-wide">
              <div class="text-gray-600 font-bold text-4xl ">24</div>
              <div class="text-gray-600 font-normal text-2xl">Sept</div>
            </div>
          </div>
          <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
            <div class="flex flex-row lg:justify-start justify-center">
              <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                <i class="far fa-clock"></i> 1:30 PM
              </div>
              <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                Organiser : IHC
              </div>
            </div>
            <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
              International Conference Dubai
            </div>

            <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
              A-142/1, A-142, Ganesh Nagar, Tilak Nagar, New Delhi, 110018
            </div>
          </div>
          <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
            <span class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
              Going
            </span>
          </div>
        </div>
      </div>
      <div className="bg-green-100 p-3 mb-5">
        <h2>Welcome to Z.M.INTERNATIONAL SCHOOL</h2>
      </div>
      <div class="lg:flex border border-gray-400">
        <div class="bg-red-300 border border-gray-400 lg:w-2/12 py-4 block h-full shadow-inner">
          <div class="text-center tracking-wide">
            <div class="text-gray-600 font-bold text-4xl ">24</div>
            <div class="text-gray-600 font-normal text-2xl">Sept</div>
          </div>
        </div>
        <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
          <div class="flex flex-row lg:justify-start justify-center">
            <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              <i class="far fa-clock"></i> 1:30 PM
            </div>
            <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
              Organiser : IHC
            </div>
          </div>
          <div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
            International Conference Dubai
          </div>

          <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
            A-142/1, A-142, Ganesh Nagar, Tilak Nagar, New Delhi, 110018
          </div>
        </div>
        <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
          <span class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
            Ended
          </span>
        </div>
      </div>
    </div>
  );
};

export default Events;
