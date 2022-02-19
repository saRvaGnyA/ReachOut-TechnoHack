import React from "react";
import { useSteps } from "react-step-builder";

function Step4() {
  const { prev } = useSteps();

  const data = {
    people: [
      {
        name: "ABC",
        disability: "Blind",
        qualificaions: "Degree",
        jobType: "Freelance",
      },
      {
        name: "XYZ",
        disability: "Blind",
        qualificaions: "Degree",
        jobType: "Freelance",
      },
      {
        name: "PQR",
        disability: "Blind",
        qualificaions: "Degree",
        jobType: "Freelance",
      },
      {
        name: "LMN",
        disability: "Blind",
        qualificaions: "Degree",
        jobType: "Freelance",
      },
    ]
  }
  return (
    <div className="p-5 bg-gray-900 mt-5">
      <div className="mx-4 p-4">
        <div className="flex items-center">
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
                className="feather feather-bookmark "
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="absolute top-9 -ml-6 text-center mt-16 w-32 text-xl font-medium uppercase text-teal-600">
              Company Details
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
              Job Specifics
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
              Available Hires
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="mt-8 p-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-10">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-10">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th scope="col" className="text-xl font-extrabold text-white py-4">
                        Sr. No.
                      </th>
                      <th scope="col" className="text-xl font-extrabold text-white px-6 py-4">
                        Employee Name
                      </th>
                      <th scope="col" className="text-xl font-extrabold text-white px-6 py-4">
                        Disability
                      </th>
                      <th scope="col" className="text-xl font-extrabold text-white px-6 py-4">
                        Qualifications
                      </th>
                      <th scope="col" className="text-xl font-extrabold text-white px-6 py-4">
                        Looking For
                      </th>
                      <th scope="col" className="text-xl font-extrabold text-white px-6 py-4">
                        Contact !
                      </th>
                    </tr>
                  </thead >
                  <tbody>
                    {data.people.map((item, i) => (<tr key={i} className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">{i + 1}</td>
                      <td className="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.disability}
                      </td>
                      <td className="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.qualificaions}
                      </td>
                      <td className="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.jobType}
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="text-gray-900 bg-teal-300 rounded-full  hover:bg-teal-400 px-4 py-2 font-semibold  duration-700">
                          Contact
                        </button>
                      </td>
                    </tr>))}

                  </tbody>
                </table>
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
          {/* <div className="flex-auto flex flex-row-reverse">
                        <button
                            className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-teal-600  
                bg-teal-600 
                text-teal-100 
                border duration-200 ease-in-out 
                border-teal-600 transition"
                            onClick={console.log("SUBMIT")}
                        >
                            Submit
                        </button>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Step4;