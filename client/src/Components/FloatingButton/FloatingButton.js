import React, { useState } from "react";
import "./FloatingButton.css";
import Modal from "./ModalFloatingButton";
const FloatingButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
            className="floating"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <i className="fa fa-universal-access aria-hidden=true"></i>
          </button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </>
  );
};

export default FloatingButton;
