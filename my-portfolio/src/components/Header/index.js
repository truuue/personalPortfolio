import "./Header.css";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center z-10 sticky mb-[1.75rem] top-[0.75rem]">
      <div className=" w-4/5 flex justify-center backdrop-blur-md shadow border-solid rounded-xl">
        <nav>
          <ul className="flex flex-row gap-5 m-5">
            <li className="hover:text-gray-500 transition-colors duration-300">
              <a href="https://github.com/truuue">Github</a>
            </li>
            <li className="hover:text-gray-500 transition-colors duration-300">
              <a href="https://www.linkedin.com/feed/">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
