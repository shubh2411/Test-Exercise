import React, {useState} from "react";

import Modal from "react-modal";

const DeleteUser = () => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Are you sure want to delete the User</h2>
        <button className="btn btn-warning" onClick={closeModal}>No</button>
        <button className="btn btn-primary" onClick={closeModal}>Yes</button>


      </Modal>
    </div>
  );
};

export default DeleteUser;