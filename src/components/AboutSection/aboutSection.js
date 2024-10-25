import { motion } from "framer-motion";
import Scroll from "../infiniteScrollingIcons/Scroll";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="flex h-full flex-col justify-evenly space-y-5 p-4 text-primary sm:h-screen sm:space-y-0 sm:p-8"
    >
      <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:mb-8 sm:text-4xl">
        About
      </h2>
      <div className="flex flex-col items-center space-y-10 sm:flex-row sm:space-y-0">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mx-auto h-auto w-48 rounded-[1rem] shadow-xl sm:w-72 sm:rounded-[3rem] sm:shadow-2xl"
          src="/images/Noah.JPG"
          alt="photo de noah"
        />
        <div className="mx-auto mt-6 sm:mt-0 sm:w-3/6">
          <p className="text-center sm:text-lg">
            Nice to meet you! like I said before my name is Noah and I'm a
            fullstack developer. I'm a passionate developer who loves to be a
            part of the development of web applications.
            <br />
            I'm always looking for new challenges and I'm always ready to learn
            new things. I'm a fullstack developer, so I can work on both the
            front-end and the back-end of a web application.
            <br />I have a little preference for the front-end development so
            I'm more comfortable with it! <span>&#129312;</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end">
        <Scroll />
      </div>
    </div>
  );
};

export default AboutSection;
