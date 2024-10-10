import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-[0.75rem] z-10 flex w-full items-center justify-center">
      <div className="flex w-1/3 justify-between rounded-[2rem] border-solid p-3 shadow-md backdrop-blur-md sm:w-3/5 sm:justify-center">
        <nav className="w-full sm:w-4/5">
          <div className="flex items-center justify-between sm:hidden">
            <h1 className="flex w-4/5 items-center justify-center font-medium">
              menu
            </h1>
            <button className="text-xl" onClick={toggleMenu}>
              &#9776;
            </button>
          </div>
          <ul
            className={`font-medium sm:flex sm:justify-between ${
              isOpen ? "block" : "hidden"
            } sm:block`}
          >
            <li className="delay-50 mt-2 text-center transition ease-in-out hover:text-gray-400 sm:mt-0">
              <a href="#home">Home</a>
            </li>
            <li className="delay-50 mt-2 text-center transition ease-in-out hover:text-gray-400 sm:mt-0">
              <a href="#about">About</a>
            </li>
            <li className="delay-50 mt-2 text-center transition ease-in-out hover:text-gray-400 sm:mt-0">
              <a href="#projects">Projects</a>
            </li>
            <li className="delay-50 mt-2 text-center transition ease-in-out hover:text-gray-400 sm:mt-0">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;