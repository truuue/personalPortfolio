const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center mb-5">
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <hr className="w-1/2 my-5 border-gray-300 rounded-lg" />
        <p className=" text-gray-500">©2024 Noah's Portfolio</p>
        <div className="flex justify-center items-center gap-2">
          <img
            src="./icons/linkedin.svg"
            alt="linkedin logo"
            className="size-6"
          />
          <a
            href="https://www.linkedin.com/in/noah-vernhet/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500"
          >
            linkedIn
          </a>
          <p className="mx-1">or</p>
          <a
            href="https://www.github.com/truuue"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500"
          >
            GitHub
          </a>
          <img
            src="./icons/github.svg"
            alt="linkedin logo"
            className="size-6"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
