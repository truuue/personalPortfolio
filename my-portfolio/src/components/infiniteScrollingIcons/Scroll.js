import React, { useEffect, useRef } from "react";

const Scroll = () => {
  const imagesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const images = entry.target.querySelectorAll("img");
            images.forEach((image) => {
              image.classList.add("animate-fade-in");
              image.classList.remove("opacity-0", "translate-y-20");
            });
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (imagesRef.current) {
      observer.observe(imagesRef.current);
    }
  }, []);

  const images = [
    { src: "/icons/adobe-photoshop-color.svg", alt: "photoshopIcon" },
    { src: "/icons/c-color.svg", alt: "cIcon" },
    { src: "/icons/css-3-color.svg", alt: "cssIcon" },
    { src: "/icons/html-5-color.svg", alt: "htmlIcon" },
    { src: "/icons/javascript-color.svg", alt: "jsIcon" },
    { src: "/icons/jquery-color.svg", alt: "jqueryIcon" },
    { src: "/icons/nodejs-color.svg", alt: "nodeIcon" },
    { src: "/icons/npm-color.svg", alt: "npmIcon" },
    { src: "/icons/react-color.svg", alt: "reactIcon" },
    { src: "/icons/tailwind.svg", alt: "tailwindIcon" },
    { src: "/icons/sass-color.svg", alt: "sassIcon" },
    { src: "/icons/mysql.svg", alt: "mysqlIcon" },
    { src: "/icons/python-color.svg", alt: "pythonIcon" },
    { src: "/icons/flask.svg", alt: "flaskIcon" },
    { src: "/icons/jinja.svg", alt: "jinjaIcon" },
    { src: "/icons/linux-color.svg", alt: "linuxIcon" },
    { src: "/icons/vim-color.svg", alt: "vimIcon" },
    { src: "/icons/terminal-bash-color.svg", alt: "bashIcon" },
    { src: "/icons/docker-color.svg", alt: "dockerIcon" },
    { src: "/icons/git-color.svg", alt: "gitIcon" },
    { src: "/icons/github.svg", alt: "githubIcon" },
    { src: "/icons/vs-code-color.svg", alt: "vscodeIcon" },
    { src: "/icons/trello-color.svg", alt: "trelloIcon" },
    { src: "/icons/notion.svg", alt: "notionIcon" },
    { src: "/icons/slack-color.svg", alt: "slackIcon" },
    { src: "/icons/figma-color.svg", alt: "figmaIcon" },
  ];

  return (
    <div className="overflow-x-hidden w-full group" ref={imagesRef}>
      <div className="relative flex animate-loop-scroll group-hover:paused">
        <div className="flex space-x-16">
          {images.concat(images).map((image, index) => (
            <img
              key={index}
              loading="lazy"
              src={image.src}
              className="max-w-none w-10 h-10 opacity-0 translate-y-20"
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
