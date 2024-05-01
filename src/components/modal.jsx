import React from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  const handleOuterClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOuterClick}
    >
      <div className="bg-white rounded p-6 w-full max-w-md">
        q
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={closeModal}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
