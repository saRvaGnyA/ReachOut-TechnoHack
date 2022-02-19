import React from "react";
import "./ModalFloating.css";
function Modal({ setOpenModal }) {
  return (
    <div className="modalFloating">
      <div className="modalContainerFloating">
        <div className="titleCloseBtnFloating">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="titleFloating">
          <h1 className="text-sm text-center">Font Family</h1>
        </div>
        <div className="FontFamily">
          <div class="grid grid-flow-col gap-1">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 sm:px-1 px-1 py-2">
              <ul>
                <li>
                  <a
                    className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer no-underline"
                    href="/"
                  >
                    Montserrat
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer    no-underline "
                    href="/"
                  >
                    Inter
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 sm:px-2 px-1 py-2">
                <ul>
                  <li>
                    <a
                      className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer    no-underline "
                      href="/"
                    >
                      Calibri
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer    no-underline "
                      href="/"
                    >
                      Andika
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="titleFloating">
          <h1 className="text-sm text-center">Font Settings</h1>
        </div>
        <div className="FontFamily">
          <div class="grid grid-flow-col gap-1">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 sm:px-0 px-1 py-2">
              <ul>
                <li>
                  <a
                    className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer no-underline "
                    href="/"
                  >
                    Smaller
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer    no-underline "
                    href="/"
                  >
                    Larger
                  </a>
                </li>
          
              </ul>
            </div>
            <div class="col-span-1">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 sm:px-2 px-1 py-2">
                <ul>
              
                  <li>
                    <a
                      className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer    no-underline "
                      href="/"
                    >
                      Links
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer    no-underline "
                      href="/"
                    >
                      Readable
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footerFloating">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtnFloating"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
