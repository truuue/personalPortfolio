"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <span className="inline-block overflow-hidden py-2">
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
    <div className="flex items-center justify-center text-center text-lg max-[500px]:flex-col">
      <span>Je suis un</span>
      <WordRotate words={["Front-end", "Back-end"]} className="mx-2" />
      <span>développeur, donc un développeur Full-Stack !</span>
    </div>
  );
};

export default SlidingText;
