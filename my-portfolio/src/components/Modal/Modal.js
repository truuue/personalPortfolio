const Modal = ({ isOpen, closeModal, selectedImage }) => {
  console.log("Modal render:", { isOpen, selectedImage });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-h-full max-w-full overflow-auto">
        <img
          src={selectedImage}
          alt="Enlarged project"
          className="max-h-[80vh] w-auto max-w-full rounded-xl shadow-xl"
        />
        <button
          className="absolute right-5 top-5 size-10 rounded-lg border border-gray-500 bg-white text-3xl text-black shadow-lg hover:bg-gray-200 hover:shadow-xl"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
