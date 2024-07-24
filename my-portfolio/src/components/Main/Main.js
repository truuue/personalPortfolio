import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import HomeSection from "../HomeSection/homeSection";
import AboutSection from "../AboutSection/aboutSection";
import ProjectsSection from "../ProjectSection/projectSection";
import ContactSection from "../ContactSection/contactSection";
import Modal from "../Modal/modal";
import "./Main.css";

emailjs.init(process.env.REACT_APP_USERID);

const Main = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    return emailjs
      .sendForm("portfolio", process.env.REACT_APP_TEMPLATEID, form.current)
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Failed to send email: " + JSON.stringify(error));
        }
      );
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ProjectsSection openModal={openModal} />
      <ContactSection form={form} sendEmail={sendEmail} />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
    </main>
  );
};

export default Main;
