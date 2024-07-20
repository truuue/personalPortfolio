import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Scroll from "../infiniteScrollingIcons/Scroll";
import SlidingText from "../slidingText/slidingText";
import "./Main.css";

emailjs.init(process.env.REACT_APP_USERID);

const Main = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
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
      {/** Home section */}
      <div
        id="home"
        className="h-screen flex flex-col items-center justify-center mt-[-2rem] gap-6 p-4 sm:p-8"
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-center">
          <span>&#128075;</span> Hello, I'm Noah
        </h1>

        {/** sliding text component */}
        <SlidingText />
        <a href="#about">
          <img
            src="/icons/arrows/arrow.svg"
            alt="arrow"
            className="w-12 sm:w-24 mt-10"
          />
        </a>
      </div>

      {/** About section */}
      <div
        id="about"
        className="h-screen flex flex-col justify-evenly p-4 sm:p-8"
      >
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 mt-5 underline">
            About
          </h2>

          <div className="flex flex-col sm:flex-row items-center">
            <img
              className="w-48 h-auto mx-auto sm:w-72 sm:rounded-[3rem] sm:shadow-2xl"
              src="/images/Noah.JPG"
              alt="noah's pic"
            ></img>
            <div className="sm:w-3/6 mx-auto mt-6 sm:mt-0">
              <p className="text-center sm:text-lg">
                Nice to meet you! like I said before my name is Noah and I'm a
                fullstack developer. I'm a passionate developer who loves to be
                a part of the development of web applications.
                <br />
                I'm always looking for new challenges and I'm always ready to
                learn new things. I'm a fullstack developer, so I can work on
                both the front-end and the back-end of a web application.
                <br />I have a little preference for the front-end development
                so I'm more comfortable with it! <span>&#129312;</span>
              </p>
            </div>
          </div>
        </div>

        {/** infinite scroll component */}
        <div className="flex justify-center sm:justify-end mt-6 sm:mt-0">
          <Scroll />
        </div>
      </div>

      {/** Projects section */}
      <div
        id="projects"
        className="h-screen flex flex-col items-center justify-evenly p-4 sm:p-8"
      >
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-center underline">
            Projects
          </h2>

          <p className="text-center sm:text-lg mt-5">
            Here are some of the projects I have worked on. You can check them
            out on my{" "}
            <a
              className="hover:text-gray-500 underline"
              href="https://github.com/truuue"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="container h-1/2 mx-auto py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-4">
            <div className="col-span-2 row-span-2 p-4 rounded-lg border-2">
              <a
                href="https://github.com/truuue/PhotoVernhet"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="text-lg sm:text-xl font-bold mb-2">
                  End of year project:
                </h2>
              </a>
              <a
                href="https://medium.com/@6233/my-portfolio-project-photo-vernhet-d1825fac5e95"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/photovernhet.png"
                  alt="photoVernhetProject"
                  className="mt-4 rounded-md shadow-xl"
                />
              </a>
            </div>

            <div className="col-span-1 row-span-1 p-4 rounded-lg border-2">
              <a href="https://twelv.fr/" target="_blank" rel="noreferrer">
                <h2 className="text-lg sm:text-xl font-bold mb-2">Twelv:</h2>
              </a>
            </div>

            <div className="col-span-1 row-span-1 p-4 rounded-lg border-2">
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                Boulangerie Maurice:
              </h2>
            </div>

            <div className="col-span-2 row-span-1 p-4 rounded-lg border-2">
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                Crédit Agricole:
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/** Contact section */}
      <div
        id="contact"
        className="h-screen flex flex-col items-center justify-evenly mt-20 p-4 sm:p-8"
      >
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-center underline mb-5">
            Contact
          </h2>

          <p className="text-center sm:text-lg">
            If you want to contact me, you can send me an email here or you can
            send a message from{" "}
            <a
              href="https://www.linkedin.com/in/noah-vernhet/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-500 underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <div id="mockup-phone">
          <div id="mockup-background">
            <div id="camera"></div>
            <div id="display">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex p-2 min-h-[28.5rem]"
              >
                <div className="flex flex-col items-center justify-evenly">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="h-10 p-3 mt-5 rounded-lg border-2 shadow focus:outline-none focus:border-gray-500"
                    required
                  />
                  <input
                    type="email"
                    name="reply_to"
                    placeholder="Email"
                    className="h-10 p-3 mt-5 rounded-lg border-2 shadow focus:outline-none focus:border-gray-500"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="h-40 p-3 mt-5 rounded-lg border-2 shadow resize-none focus:outline-none focus:border-gray-500"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="flex items-center justify-center h-10 p-3 mt-5 rounded-lg bg-gray-100 text-gray-400 border-2 shadow hover:bg-gray-200 hover:text-gray-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
