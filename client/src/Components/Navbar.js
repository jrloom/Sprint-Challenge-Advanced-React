import React from "react";
import { useDarkMode } from "../Hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav>
      <h1>Women's World Cup Players Ranked by Google Trends</h1>
      <div onClick={toggleMode} className={darkMode ? "toggle toggled" : "toggle"}>
        Darkmode
      </div>
    </nav>
  );
};

export default Navbar;
