import React from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Marquee = React.memo(
  ({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    ...props
  }) => {
    return (
      <div
        {...props}
        className={cn(
          "group flex overflow-hidden [--duration:50s] [--gap:1rem]",
          vertical ? "flex-col" : "flex-row",
          className
        )}
      >
        <div
          className={cn(
            "flex shrink-0 justify-around gap-[--gap] will-change-transform",
            vertical ? "flex-col" : "flex-row",
            vertical ? "animate-marquee-vertical" : "animate-marquee",
            reverse ? "animate-reverse" : "",
            pauseOnHover ? "group-hover:pause-animation" : ""
          )}
        >
          {children}
        </div>
        <div
          className={cn(
            "flex shrink-0 justify-around gap-[--gap] will-change-transform",
            vertical ? "flex-col" : "flex-row",
            vertical ? "animate-marquee-vertical" : "animate-marquee",
            reverse ? "animate-reverse" : "",
            pauseOnHover ? "group-hover:pause-animation" : ""
          )}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    );
  }
);

const Scroll = () => {
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
    <div className="relative w-full overflow-hidden">
      <div className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"></div>
      <Marquee className="w-full py-2" pauseOnHover={true}>
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            className="mx-8 size-10 object-contain"
            alt={image.alt}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Scroll;
