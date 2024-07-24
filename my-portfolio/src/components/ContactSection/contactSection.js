import React from "react";

const ContactSection = ({ form, sendEmail }) => {
  return (
    <div
      id="contact"
      className="h-full flex flex-col items-center justify-evenly sm:mt-20 p-4 sm:p-8 sm:h-screen"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold text-center underline mb-5">
          Contact
        </h2>
        <p className="text-center sm:text-lg mb-5">
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
  );
};

export default ContactSection;
