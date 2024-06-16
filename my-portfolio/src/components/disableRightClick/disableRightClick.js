import React, { useEffect } from "react";

const DisableRightClick = ({ children }) => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return <>{children}</>;
};

export default DisableRightClick;
