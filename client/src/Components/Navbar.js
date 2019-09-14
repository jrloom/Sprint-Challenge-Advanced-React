import React from "react";
import { useDarkMode } from "../Hooks/useDarkMode";
import { Button, Icon, Segment } from "semantic-ui-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
      <header className="navbar">
        <div className="blank"></div>
        <div className="header">
          <h1 as="h1">Women's World Cup Players</h1>
          <div>(Ranked by Google Trends)</div>
        </div>
        <div className="darkModeButton">
          <Button circular icon={"lightbulb outline"} toggle onClick={toggleMode} className={darkMode ? "toggle toggled" : "toggle"} />
        </div>
      </header>
  );
};

export default Navbar;
