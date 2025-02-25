import { useState } from "react";
import FormComponent from "./formComponent";
import NewFormComponent from "./newFormComponent";

const ContactSection = () => {
  const [showNewForm, setShowNewForm] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleFormTransition = () => {
    setIsOpening(true);
    setTimeout(() => {
      setShowNewForm(false);
      setIsOpening(false);
    }, 300);
  };

  const handleBackTransition = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowNewForm(true);
      setIsClosing(false);
    }, 300);
  };

  const Iphone15Pro = ({
    width = 325,
    height = 662,
    src,
    children,
    ...props
  }) => {
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

        {children}

        {/* Dynamic island avec bordure */}
        <path
          d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
          className="fill-white dark:fill-[#262626]"
        />
        <path
          d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
          className="stroke-[#E5E5E5] dark:stroke-[#404040]"
          strokeWidth="2"
          fill="none"
        />

        {/* Point du dynamic island */}
        <circle cx="265" cy="48.5" r="3" fill="#E5E5E5" />

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

  const LightBackground = ({ isOpening, showNewForm }) => (
    <rect
      x="21.25"
      y="19.25"
      width="389.5"
      height="150"
      fill="rgba(0,0,0,0.1)"
      clipPath="url(#roundedCorners)"
      className={`transition-all duration-300 ${
        isOpening ? "scale-95 opacity-0" : "scale-100 opacity-100"
      } ${showNewForm ? "" : ""}`}
    />
  );

  return (
    <div
      id="contact"
      className="flex h-full flex-col items-center justify-evenly p-4 sm:mt-20 sm:h-screen sm:p-8"
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
        <Iphone15Pro width={325} height={662}>
          <LightBackground isOpening={isOpening} showNewForm={showNewForm} />
        </Iphone15Pro>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className={`transition-all duration-300 ${
              isOpening ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {showNewForm ? (
              <NewFormComponent onSendClick={handleFormTransition} />
            ) : (
              <FormComponent
                onBackClick={handleBackTransition}
                isClosing={isClosing}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
