"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// Fonction utilitaire pour combiner les classes CSS
const cn = (...classes) => classes.filter(Boolean).join(" ");

const WordRotate = ({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Nettoyer l'intervalle lors du démontage
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className="inline-block overflow-hidden py-2 text-primary">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={cn(className)}
          {...framerProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const SlidingText = () => {
  return (
    <div className="flex items-center justify-center text-center text-lg text-primary max-[535px]:flex-col">
      <div className="flex items-center max-[535px]:mb-2">
        <span>I am a</span>
        <WordRotate words={["Front-end", "Back-end"]} className="mx-2" />
        <span>developer,</span>
      </div>
      <span className="ml-2">so a Full-Stack developer !</span>
    </div>
  );
};

export default React.memo(SlidingText);
