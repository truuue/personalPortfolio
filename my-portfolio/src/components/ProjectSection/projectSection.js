import React from "react";

const ProjectsSection = ({ openModal }) => {
  return (
    <div
      id="projects"
      className="h-full flex flex-col items-center justify-evenly p-4 sm:p-8 sm:h-screen"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold text-center underline max-[415px]:mt-16">
          Projects
        </h2>
        <p className="text-center sm:text-lg mt-5">
          Here are some of the projects I have worked on. You can check them out
          on my{" "}
          <a
            className="hover:text-gray-500 underline"
            href="https://github.com/truuue"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p className="text-center text-sm mt-1 text-gray-500">
          You can click on each project's images to expand them or click on each
          title for more information.
        </p>
      </div>
      <div className="container h-1/2 mx-auto py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-4">
          <div
            className="col-span-2 row-span-2 p-4 sm:border-r-2 cursor-pointer"
            onClick={() => openModal("/images/photovernhet.png")}
          >
            <a
              href="https://medium.com/@6233/my-portfolio-project-photo-vernhet-d1825fac5e95"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-2 relative inline-block after:content-[''] after:absolute after:w-0 after:left-0 after:-bottom-1 after:h-[2px] after:bg-black after:transition-width after:duration-300 hover:after:w-full">
                End of year project:
              </h2>
            </a>
            <img
              src="/images/photovernhet.png"
              alt="photoVernhetProject"
              className="mt-4 rounded-md shadow-xl object-cover w-full"
            />
          </div>
          <div
            className="col-span-1 row-span-1 p-4 cursor-pointer"
            onClick={() => openModal("./images/webfetcher.png")}
          >
            <a
              href="https://github.com/truuue/webFetcher"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-2 relative inline-block after:content-[''] after:absolute after:w-0 after:left-0 after:-bottom-1 after:h-[2px] after:bg-black after:transition-width after:duration-300 hover:after:w-full">
                Web Fetcher:
              </h2>
            </a>
            <img
              src="./images/webfetcher.png"
              alt="webFetcherProject"
              className="mt-4 rounded-md shadow-xl object-cover h-44 w-full"
            />
          </div>
          <div
            className="col-span-1 row-span-1 p-4 cursor-pointer"
            onClick={() => openModal("./images/twelv.png")}
          >
            <a href="https://twelv.fr/" target="_blank" rel="noreferrer">
              <h2 className="text-lg sm:text-xl font-bold mb-2 relative inline-block after:content-[''] after:absolute after:w-0 after:left-0 after:-bottom-1 after:h-[2px] after:bg-black after:transition-width after:duration-300 hover:after:w-full">
                Twelv:
              </h2>
            </a>
            <img
              src="./images/twelv.png"
              alt="twelv img"
              className="mt-4 rounded-md shadow-xl object-cover h-44 w-full"
            />
          </div>
          <div className="col-span-2 row-span-1 p-4 sm:border-t-2">
            <h2 className="text-lg sm:text-xl font-bold mb-2 relative inline-block after:content-[''] after:absolute after:w-0 after:left-0 after:-bottom-1 after:h-[2px] after:bg-black after:transition-width after:duration-300 hover:after:w-full">
              Crédit Agricole:
            </h2>
            <p className="text-center">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
