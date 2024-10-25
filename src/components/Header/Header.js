import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-[0.75rem] z-50 flex w-full items-center justify-center text-primary">
      <div className="flex w-1/3 justify-between rounded-[2rem] border-solid p-3 shadow-md backdrop-blur-md sm:w-3/5 sm:justify-center">
        <nav className="w-full sm:w-4/5">
          <div className="flex items-center justify-center sm:hidden">
            <h1 className="flex w-4/5 items-center justify-center font-medium">
              <button className="text-center text-xl" onClick={toggleMenu}>
                menu
              </button>
            </h1>
          </div>
          <ul
            className={`font-medium transition-all duration-300 sm:flex sm:justify-between ${
              isOpen ? "block" : "hidden"
            } sm:block`}
          >
            <li className="delay-50 mt-2 text-center transition ease-in-out hover:text-primary/60 sm:mt-0">
              <a href="#home">Home</a>
            </li>
            <li className="delay-50 mt-2 text-center transition ease-in-out hover:text-primary/60 sm:mt-0">
              <a href="#about">About</a>
            </li>
            <li className="delay-50 mt-2 text-center transition ease-in-out hover:text-primary/60 sm:mt-0">
              <a href="#projects">Projects</a>
            </li>
            <li className="delay-50 mt-2 text-center transition ease-in-out hover:text-primary/60 sm:mt-0">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
