import { lazy, Suspense, useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const Modal = lazy(() => import("./components/Modal/Modal"));

function App() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const preloadModal = () => import("./components/Modal/Modal");
    preloadModal();
  }, []);

  const openModal = (imageSrc) => {
    console.log("openModal called with:", imageSrc);
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <Header />
      <Main openModal={openModal} />
      <Footer />
      <Suspense fallback={<div>Loading...</div>}>
        <Modal
          isOpen={!!modalImage}
          closeModal={closeModal}
          selectedImage={modalImage}
        />
      </Suspense>
      <div className="fixed inset-0 z-[-1] h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </>
  );
}

export default App;
