import React, { useEffect } from "react";

const DisableMouseInteractions = ({ children }) => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const handleMiddleClick = (event) => {
      if (event.button === 1) {
        event.preventDefault();
      }
    };

    // Ajouter des écouteurs d'événements
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("mousedown", handleMiddleClick);

    // Nettoyer les écouteurs d'événements lors du démontage du composant
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("mousedown", handleMiddleClick);
    };
  }, []);

  return <>{children}</>;
};

export default DisableMouseInteractions;
