const SlidingText = () => {
  return (
    <p className="text-lg text-center flex items-center justify-center">
      I'm a{" "}
      <span className="relative h-[1em] w-[6rem] overflow-hidden align-middle flex items-center">
        <span className="absolute left-0 top-0 h-full w-full translate-y-full animate-slide leading-none">
          Front-end
        </span>
        <span className="absolute left-0 top-0 h-full w-full translate-y-full animate-slide leading-none [animation-delay:3s]">
          Back-end
        </span>
      </span>{" "}
      developer so a Full-Stack Developer!
    </p>
  );
};

export default SlidingText;
