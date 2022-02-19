import React, { useState } from "react";
import Modal from "../LoginPopup/Modal";
import logo from "../../Logo.png";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 fixed-top">
      <div className="md:flex items-center justify-between bg-gray-300 py-2 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
           <span className="text-3xl text-teal-600 mr-1 pt-2">
            <a href="/" className="no-underline text-decoration-none text-gray-900">
              <img src={logo} width="65" alt="Logo" />
            </a>
          </span>
          <a href="/" className="no-underline text-decoration-none text-gray-900 hover:text-gray-900">
          ReachOut
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-6 top-3 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-gray-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14 " : "top-[-490px]"
          } sm:text-center`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href="/"
              className="text-gray-800 hover:text-black duration-500 no-underline border-b-2 border-transparent hover:border-teal-600"
            >
              Home
            </a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href="/jobLookUp"
              className="text-gray-800 hover:text-black duration-500 no-underline  border-b-2 border-transparent hover:border-teal-600"
            >
              Job Lookup
            </a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href="/recruit"
              className="text-gray-800 hover:text-black duration-500 no-underline  border-b-2 border-transparent hover:border-teal-600"
            >
              Recruit
            </a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href="/contact"
              className="text-gray-800 hover:text-black duration-500 no-underline  border-b-2 border-transparent hover:border-teal-600"
            >
              Contact
            </a>
          </li>

          <button
            className="bg-teal-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-teal-400 
    duration-500"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Login
          </button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
