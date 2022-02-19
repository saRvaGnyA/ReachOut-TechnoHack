import React from "react";
import { useSteps } from "react-step-builder";

function Personal({ companyDetails, setCompanyDetails }) {
  const { prev, next } = useSteps();
  const host = "https://reachout-server.herokuapp.com";

  const onChange = (e) => {
    setCompanyDetails({ ...companyDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    const url = `${host}/api/company/createcompany`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...companyDetails }),
    });
    const company = await response.json();
    console.log(company);
    localStorage.setItem("auth-token", company.authToken);
    next();
  };

  return (
    <div className="p-5 bg-gray-900 mt-5">
      <div className="mx-4 p-4">
        <div className="flex items-center">
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
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute top-9 -ml-6 text-center mt-16 w-32 text-xl font-medium uppercase text-teal-600">
              Company Details
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
          <div className="flex items-center text-gray-500 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2  border-gray-300">
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
            <div className="absolute top-9 -ml-6 text-center mt-16 w-32 text-xl font-medium uppercase text-gray-500">
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
                className="feather feather-mail "
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="absolute top-9 -ml-6 text-center mt-16 w-32 text-xl font-medium uppercase text-gray-500">
              Available Hires
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4">
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                <label htmlFor="name">Company Name</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  id="name"
                  name="name"
                  onChange={onChange}
                  value={companyDetails.name}
                  placeholder="XYZ PVT. LTD."
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                {" "}
                <label htmlFor="head">Company Head</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  id="head"
                  name="head"
                  onChange={onChange}
                  value={companyDetails.head}
                  placeholder="Full Name"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                {" "}
                <label htmlFor="mobile">Phone No.</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  id="mobile"
                  name="mobile"
                  onChange={onChange}
                  value={companyDetails.mobile}
                  placeholder="Phone No."
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                {" "}
                <label htmlFor="email">Email</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  id="email"
                  name="email"
                  onChange={onChange}
                  value={companyDetails.email}
                  placeholder="john@gmail.com"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  type="email"
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                <label htmlFor="website">Company Website</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  id="website"
                  name="website"
                  onChange={onChange}
                  value={companyDetails.website}
                  placeholder="Website Link"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                <label htmlFor="gstin">GSTIN No.</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  id="gstin"
                  name="gstin"
                  onChange={onChange}
                  value={companyDetails.gstin}
                  placeholder="GSTIN No."
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full mx-2 flex-1 svelte-1l8159u">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xl leading-8 uppercase">
                <label htmlFor="password">Create Password</label>
              </div>
              <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                <input
                  id="password"
                  name="password"
                  onChange={onChange}
                  value={companyDetails.password}
                  type="password"
                  placeholder="Password"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2 mt-4">
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
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
