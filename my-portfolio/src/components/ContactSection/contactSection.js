import React, { useState } from "react";

const ContactSection = ({ form, sendEmail }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Démarrer le loader
    try {
      await sendEmail(e);
    } finally {
      setIsLoading(false); // Arrêter le loader, même en cas d'erreur
    }
  };

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
              onSubmit={handleSubmit}
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
                  disabled={isLoading}
                  className="flex items-center justify-center h-10 p-3 mt-5 rounded-lg bg-gray-100 text-gray-400 border-2 shadow hover:bg-gray-200 hover:text-gray-500"
                >
                  {isLoading ? (
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 animate-spin"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 50 50"
                        xmlSpace="preserve"
                      >
                        <path
                          fill="#000"
                          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                        >
                          <animateTransform
                            attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="0 25 25"
                            to="360 25 25"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </path>
                      </svg>
                    </div>
                  ) : (
                    "Send"
                  )}
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
