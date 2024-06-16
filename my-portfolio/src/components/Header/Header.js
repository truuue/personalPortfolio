const Header = () => {
  return (
    <header className="w-full flex justify-center items-center z-10 sticky top-[0.75rem]">
      <div className="w-3/5 p-3 flex justify-center backdrop-blur-md shadow border-solid rounded-[2rem]">
        <nav className="w-4/5">
          <ul className="flex  justify-between font-medium">
            <li className="transition ease-in-out delay-50 hover:text-gray-600">
              {/* Home */}
              <a href="#home">Home</a>
            </li>
            <li className="transition ease-in-out delay-50 hover:text-gray-600">
              {/* About */}
              <a href="#about">About</a>
            </li>
            <li className="transition ease-in-out delay-50 hover:text-gray-600">
              {/* Projects */}
              <a href="#projects">Projects</a>
            </li>
            <li className="transition ease-in-out delay-50 hover:text-gray-600">
              {/* Contact */}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
