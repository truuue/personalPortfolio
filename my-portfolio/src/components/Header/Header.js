import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex justify-center items-center z-10 sticky top-[0.75rem]">
      <div className="sm:w-3/5 w-1/3 p-3 flex justify-between sm:justify-center backdrop-blur-md shadow-md border-solid rounded-[2rem]">
        <nav className="w-full sm:w-4/5">
          <div className="flex justify-between items-center sm:hidden">
            <h1 className="font-medium w-4/5 flex justify-center items-center">
              menu
            </h1>
            <button className="text-xl" onClick={toggleMenu}>
              &#9776;
            </button>
          </div>
          <ul
            className={`sm:flex sm:justify-between font-medium ${
              isOpen ? "block" : "hidden"
            } sm:block`}
          >
            <li className="transition ease-in-out delay-50 hover:text-gray-400 mt-2 sm:mt-0 text-center">
              <a href="#home">Home</a>
            </li>
            <li className="transition ease-in-out delay-50 hover:text-gray-400 mt-2 sm:mt-0 text-center">
              <a href="#about">About</a>
            </li>
            <li className="transition ease-in-out delay-50 hover:text-gray-400 mt-2 sm:mt-0 text-center">
              <a href="#projects">Projects</a>
            </li>
            <li className="transition ease-in-out delay-50 hover:text-gray-400 mt-2 sm:mt-0 text-center">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
