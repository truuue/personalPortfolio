const Footer = () => {
  return (
    <footer className="mb-5 flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <hr className="my-5 w-1/2 rounded-lg border-primary/20" />
        <p className="text-primary/50">©2024 Noah's Portfolio</p>
        <div className="flex items-center justify-center gap-2 text-primary">
          <img
            src="./icons/linkedin.svg"
            alt="linkedin logo"
            className="size-6"
          />
          <a
            href="https://www.linkedin.com/in/noah-vernhet/"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 hover:text-primary/70"
          >
            linkedIn
          </a>
          <p className="mx-1">or</p>
          <a
            href="https://www.github.com/truuue"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 hover:text-primary/70"
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
