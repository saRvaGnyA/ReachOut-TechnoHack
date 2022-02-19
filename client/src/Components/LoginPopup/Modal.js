import React from "react";
import "./Modal.css";
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Login Form</h1>
        </div>
        <div className="body flex flex-row justify-between">
            <a href="/loginEmployee" className="text-decoration-none">
          <button className="bg-teal-500 hover:bg-teal-300 text-black font-bold py-2 px-3 rounded-full text-lg">
            Login for employee
          </button>
          </a>
          <a href="/loginCompany" className="text-decoration-none">
          <button className="bg-teal-500 hover:bg-teal-300 text-black font-bold py-2 px-3 rounded-full text-lg">
            Login for company
          </button>
          </a>
        </div>
        <div className="register mt-10 mb-5">
          <span>Not registered yet</span>
          <a href="/jobLookUp" className="text-decoration-none ">
          <h6 className="text-muted">Click here to register as employee &#8594;</h6>
          </a>
          <a href="/recruit" className="text-decoration-none ">
          <h6 className="text-muted">Click here to register as company	&#8594;</h6>
          </a>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
