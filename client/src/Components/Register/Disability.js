import React from "react";
import { useSteps } from "react-step-builder";

function Disability() {
  const { prev, next } = useSteps();
  return (
    <div className="p-5">
      <div className="mx-4 p-4">
        <div className="flex items-center">
          <div className="flex items-center text-teal-600 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
              Personal
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
          <div className="flex items-center text-white relative">
            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user-plus "
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
              Disability
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          <div className="flex items-center text-gray-500 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail "
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
              Job Specifics
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          <div className="flex items-center text-gray-500 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-database "
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
              Jobs
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4">
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <label for="Disability Type">Disability Type</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select
                  id="Disability Type"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                  <option value="Physical">Physical</option>
                  <option value="Mental">Mental</option>
                </select>
              </div>
            </div>
            <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <label for="Disability">Disability</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select
                  id="Disability"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                  <option value="Blind">Blind</option>
                  <option value="Deaf">Deaf</option>
                  <option value="Dumb">Dumb</option>
                  <option value="Arm Amputee">Arm Amputee</option>
                  <option value="Legless">Legless</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <label for="Severity">Severity</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  type="number"
                  id="Severity"
                  min="1"
                  max="5"
                  placeholder="1"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <label for="Job Preference">Job Preference</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select
                  id="Job Preference"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Freelance">Freelance</option>
                </select>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2 mt-4">
          <button
            className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-gray-200  
                bg-gray-100 
                text-gray-700 
                border duration-200 ease-in-out 
                border-gray-600 transition"
            onClick={prev}
          >
            Previous
          </button>
          <div className="flex-auto flex flex-row-reverse">
            <button
              className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-teal-600  
                bg-teal-600 
                text-teal-100 
                border duration-200 ease-in-out 
                border-teal-600 transition"
              onClick={next}
            >
              Submit Details
            </button>
            {/* <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-teal-200  
                bg-teal-100 
                text-teal-700 
                border duration-200 ease-in-out 
                border-teal-600 transition">Skip</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disability;
