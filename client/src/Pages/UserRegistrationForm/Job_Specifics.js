import React from "react";
import { useSteps } from "react-step-builder";

function JobSpecifics({ userDetails, setUserDetails }) {
  const { prev, next } = useSteps();

  const host = "https://reachout-server.herokuapp.com";

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    const url = `${host}/api/user/createuser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userDetails }),
    });
    const user = await response.json();
    console.log(user);
    localStorage.setItem("auth-token", user.authToken);
    next();
  };

  return (
    <div className="p-5 bg-gray-900 mt-5">
      <div className="mx-4 p-4">
        <div className="flex items-center">
          <div className="flex items-center text-teal-600 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2 border-teal-600">
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
            <div className="absolute top-9 -ml-6 text-center mt-16 w-32 text-xl font-medium uppercase text-teal-600">
              Personal
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
          <div className="flex items-center text-teal-600 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2  border-teal-600">
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
            <div className="absolute top-9 -ml-6 text-center mt-16 w-32 text-xl font-medium uppercase text-teal-600">
              Disability
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
          <div className="flex items-center text-white relative">
            <div className="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2 bg-teal-600 border-teal-600">
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
            <div className="absolute top-9 -ml-6 text-center mt-16 w-32 text-xl font-medium uppercase text-teal-600">
              Job Specifics
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          <div className="flex items-center text-gray-500 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2 border-gray-300">
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
            <div className="absolute top-9 -ml-6 text-center mt-16 w-32 text-xl font-medium uppercase text-gray-500">
              Jobs
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4">
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                <label htmlFor="jobtype">Job Type</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select
                  id="jobtype"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Product Testing">Product Testing</option>
                </select>
              </div>
            </div>
            <div className="w-full flex-1 mx-2 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                <label htmlFor="qualifications">Qualifications</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select
                  id="qualifications"
                  name="qualifications"
                  onChange={onChange}
                  value={userDetails.qualifications}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                  <option value="Less than 10">Less than 10</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="10+2 pass">10+2 pass</option>
                  <option value="Degree">Degree</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                <label htmlFor="sector">Sector</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <select
                  id="sector"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                  <option value="Arts, Entertainment, Recreation">
                    Arts, Entertainment, Recreation
                  </option>
                  <option value="Clothing and Accessories">
                    Clothing and Accessories
                  </option>
                  <option value="Data Science, Processing, Management">
                    Data Science, Processing, Management
                  </option>
                  <option value="Education and Health Services">
                    Education and Health Services
                  </option>
                  <option value="Electronics and Electrical Hardware">
                    Electronics and Electrical Hardware
                  </option>
                  <option value="Finance and Insurance">
                    Finance and Insurance
                  </option>
                  <option value="Food and Beverage">Food and Beverage</option>
                  <option value="IT and Tech">IT and Tech</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Repair and Maintainence">
                    Repair and Maintainence
                  </option>
                  <option value="All">All</option>
                </select>{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                <label htmlFor="place">Place Preference</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  id="place"
                  name="place"
                  onChange={onChange}
                  value={userDetails.place}
                  placeholder="Place"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2 mt-4">
          <button
            className="text-base hover:scale-125 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
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
              className="text-base  ml-2  hover:scale-125 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-teal-600  
                bg-teal-600 
                text-teal-100 
                border duration-200 ease-in-out 
                border-teal-600 transition"
              onClick={submitHandler}
            >
              Show Jobs!
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

export default JobSpecifics;
