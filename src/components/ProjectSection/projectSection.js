const cn = (...classes) => classes.filter(Boolean).join(" ");

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-6",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
  openModal,
}) => (
  <div
    className={cn(
      "group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg",
      className
    )}
    onClick={openModal}
  >
    <div className="absolute inset-0 z-0">{background}</div>
    <div className="relative z-10 flex h-full flex-col justify-end bg-gradient-to-t from-black/95 to-transparent p-6">
      <h3 className="mb-2 text-xl font-bold text-white">{name}</h3>
      <p className="mb-4 text-sm text-gray-200">{description}</p>
      <a
        href={href}
        className="inline-block rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {cta}
      </a>
    </div>
  </div>
);

const ProjectsSection = ({ openModal }) => {
  return (
    <div id="projects" className="py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:mb-8 sm:text-4xl">
          My Projects
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-primary sm:mb-16 sm:text-lg md:text-nowrap">
          Here are some of the projects I have worked on. You can check them out
          on my{" "}
          <a
            className="transition-all duration-300 hover:text-primary/70 hover:underline"
            href="https://github.com/truuue"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <BentoGrid>
          <BentoCard
            name="Projet de fin d'année"
            className="aspect-auto sm:col-span-4 sm:row-span-2 sm:aspect-[16/9]"
            background={
              <img
                src="/images/photovernhet.png"
                alt="Projet Vernhet"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            }
            description="Une exploration innovante de la photographie numérique, fusionnant art et technologie."
            href="https://medium.com/@6233/my-portfolio-project-photo-vernhet-d1825fac5e95"
            cta="Explorer le projet"
            openModal={() => openModal("/images/photovernhet.png")}
          />
          <BentoCard
            name="Web Fetcher"
            className="aspect-auto sm:col-span-2 sm:row-span-2"
            background={
              <img
                src="./images/webfetcher.png"
                alt="Web Fetcher"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            }
            description="Un outil puissant pour extraire et analyser des données web à grande échelle."
            href="https://github.com/truuue/webFetcher"
            cta="Voir le code"
            openModal={() => openModal("./images/webfetcher.png")}
          />
          <BentoCard
            name="Twelv"
            className="aspect-auto sm:col-span-3 sm:aspect-[4/3]"
            background={
              <img
                src="./images/twelv.png"
                alt="Twelv"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            }
            description="Une application de rencontres révolutionnaire basée sur l'astrologie et l'IA."
            href="https://twelv.fr/"
            cta="Découvrir l'app"
            openModal={() => openModal("./images/twelv.png")}
          />
          <BentoCard
            name="Crédit Agricole"
            className="aspect-auto sm:col-span-3 sm:aspect-[4/3]"
            background={
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-700">
                <span className="text-2xl font-bold text-white">
                  Bientôt disponible
                </span>
              </div>
            }
            description="Un projet innovant en cours de développement pour l'une des plus grandes banques françaises."
            href="#"
            cta="En savoir plus"
            openModal={() => {}}
          />
        </BentoGrid>
      </div>
    </div>
  );
};

export default ProjectsSection;
