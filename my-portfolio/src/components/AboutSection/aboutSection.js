import React from "react";
import Scroll from "../infiniteScrollingIcons/Scroll";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="h-full flex flex-col justify-evenly p-4 sm:p-8 sm:h-screen"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 mt-5 underline">
          About
        </h2>
        <div className="flex flex-col sm:flex-row items-center">
          <img
            className="w-48 h-auto mx-auto rounded-[1rem] shadow-xl sm:w-72 sm:rounded-[3rem] sm:shadow-2xl"
            src="/images/Noah.JPG"
            alt="noah's pic"
          />
          <div className="sm:w-3/6 mx-auto mt-6 sm:mt-0">
            <p className="text-center sm:text-lg">
              Nice to meet you! like I said before my name is Noah and I'm a
              fullstack developer. I'm a passionate developer who loves to be a
              part of the development of web applications.
              <br />
              I'm always looking for new challenges and I'm always ready to
              learn new things. I'm a fullstack developer, so I can work on both
              the front-end and the back-end of a web application.
              <br />I have a little preference for the front-end development so
              I'm more comfortable with it! <span>&#129312;</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end mt-6 sm:mt-0 max-[415px]:mt-16">
        <Scroll />
      </div>
    </div>
  );
};

export default AboutSection;
