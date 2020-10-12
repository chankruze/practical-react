/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 19 2020 14:05:38 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import Modal from "react-modal";

let subtitle;

const customStyles = {
  overlay: {
    // backgroundColor: 'grey'
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function ModalContainer() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        // to close when clicked outside
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 ref={(subtitle_ref) => (subtitle = subtitle_ref)}>Modal Title</h1>
        <h2>Modal subtitle</h2>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default React.memo(ModalContainer);
