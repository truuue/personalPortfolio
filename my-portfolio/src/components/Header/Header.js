import "./Header.css";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center z-10 sticky mb-[5rem] top-[0.75rem]">
      <div className="w-3/5 p-3 flex justify-center backdrop-blur-md shadow border-solid rounded-[2rem]">
        <nav className="w-4/5">
          <ul className="flex  justify-between font-medium">
            <li className="transition ease-in-out delay-50 hover:text-gray-600">
              <a href="#home">Home</a>
            </li>
            <li className="transition ease-in-out delay-50 hover:text-gray-600">
              <a href="#about">About</a>
            </li>
            <li className="transition ease-in-out delay-50 hover:text-gray-600">
              <a href="#projects">Projects</a>
            </li>
            <li className="transition ease-in-out delay-50 hover:text-gray-600">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

{
  /**
   * <ul className="flex flex-row gap-5 m-5">
   * <li className="hover:text-gray-500 transition-colors duration-300">
   * <a href="https://github.com/truuue">Github</a>
   * </li>
   * <li className="hover:text-gray-500 transition-colors duration-300">
   * <a href="https://www.linkedin.com/feed/">LinkedIn</a>
   * </li>
   * </ul>
   */
}
