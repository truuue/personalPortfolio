import emailjs from "emailjs-com";
import { useRef } from "react";
import AboutSection from "../AboutSection/aboutSection";
import ContactSection from "../ContactSection/contactSection";
import HomeSection from "../HomeSection/homeSection";
import ProjectsSection from "../ProjectSection/projectSection";
import "./Main.css";

emailjs.init(process.env.REACT_APP_USERID);

const Main = ({ openModal }) => {
  const form = useRef();

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

  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ProjectsSection openModal={openModal} />
      <ContactSection form={form} sendEmail={sendEmail} />
    </main>
  );
};

export default Main;
