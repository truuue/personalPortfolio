import { useState } from "react";

const ContactSection = ({ form, sendEmail }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await sendEmail(e);
    } finally {
      setIsLoading(false);
    }
  };

  const Iphone15Pro = ({ width = 325, height = 662, src, ...props }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 433 882`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
          className="fill-white dark:fill-[#262626]"
        />
        <path
          opacity="0.5"
          d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
          className="fill-[#E5E5E5] stroke-[#E5E5E5] stroke-[0.5] dark:fill-[#404040] dark:stroke-[#404040]"
        />

        {src && (
          <image
            href={src}
            x="21.25"
            y="19.25"
            width="389.5"
            height="843.5"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#roundedCorners)"
          />
        )}
        <path
          d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
          className="fill-[#F5F5F5] dark:fill-[#262626]"
        />
        <path
          d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
          className="fill-[#F5F5F5] dark:fill-[#262626]"
        />
        <path
          d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <defs>
          <clipPath id="roundedCorners">
            <rect
              x="21.25"
              y="19.25"
              width="389.5"
              height="843.5"
              rx="55.75"
              ry="55.75"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };

  return (
    <div
      id="contact"
      className="flex h-[100dvh] flex-col items-center justify-evenly p-4 sm:mt-20 sm:p-8"
    >
      <div>
        <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:mb-8 sm:text-4xl">
          Contact
        </h2>
        <p className="mb-5 text-center sm:text-lg">
          If you want to contact me, you can send me an email here or you can
          send a message from{" "}
          <a
            href="https://www.linkedin.com/in/noah-vernhet/"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 hover:text-primary/70 hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <div className="relative">
        <Iphone15Pro width={325} height={662} />
        <div className="absolute inset-0 flex items-center justify-center">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex h-full w-4/5 flex-col items-center justify-evenly"
          >
            <div className="flex w-full flex-col items-center justify-evenly space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder="Nom"
                className="h-10 w-full rounded-lg border-2 p-2 text-sm shadow transition-all duration-300 focus:border-primary/70 focus:outline-none"
                required
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Email"
                className="h-10 w-full rounded-lg border-2 p-2 text-sm shadow transition-all duration-300 focus:border-primary/70 focus:outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="h-32 w-full resize-none rounded-lg border-2 p-2 text-sm shadow transition-all duration-300 focus:border-primary/70 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isLoading}
                className="flex h-10 w-full items-center justify-center rounded-lg border-2 bg-primary/5 p-2 text-sm text-primary/40 shadow transition-all duration-300 hover:bg-primary/10 hover:text-primary/50 dark:text-white dark:hover:bg-primary/50 dark:hover:text-white"
              >
                {isLoading ? (
                  <div className="flex size-8 items-center justify-center">
                    <svg
                      className="size-8 animate-spin"
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
  );
};

export default ContactSection;
