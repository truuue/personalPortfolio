import SlidingText from "../slidingText/slidingText";

const HomeSection = () => {
  return (
    <div
      id="home"
      className="mt-[-2rem] flex h-[100dvh] flex-col items-center justify-center gap-6 p-4 sm:p-8"
    >
      <h1 className="text-center text-4xl font-bold text-primary sm:text-6xl">
        <span>&#128075;</span> Hello, I'm Noah
      </h1>
      <SlidingText />
      <a href="#about">
        <img
          src="/icons/arrows/arrow.svg"
          alt="arrow"
          className="mt-10 w-12 text-primary sm:w-24"
        />
      </a>
    </div>
  );
};

export default HomeSection;
