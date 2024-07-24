import React from "react";
import SlidingText from "../slidingText/slidingText";

const HomeSection = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col items-center justify-center mt-[-2rem] gap-6 p-4 sm:p-8"
    >
      <h1 className="text-4xl sm:text-6xl font-bold text-center">
        <span>&#128075;</span> Hello, I'm Noah
      </h1>
      <SlidingText />
      <a href="#about">
        <img
          src="/icons/arrows/arrow.svg"
          alt="arrow"
          className="w-12 sm:w-24 mt-10"
        />
      </a>
    </div>
  );
};

export default HomeSection;
