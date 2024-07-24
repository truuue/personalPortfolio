import React from "react";

const Modal = ({ isOpen, closeModal, selectedImage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-full max-h-full overflow-auto">
        <img
          src={selectedImage}
          alt="Enlarged project"
          className="w-auto max-w-full max-h-[80vh] rounded-xl shadow-xl"
        />
        <button
          className="absolute top-5 right-5 text-black text-3xl bg-white rounded-lg shadow-xl size-10 hover:bg-gray-200"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
