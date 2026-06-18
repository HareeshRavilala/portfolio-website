import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import {FaMoon,FaSun} from "react-icons/fa";

function ThemeToggle() {

  const {
    theme,
    toggleTheme
  } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-btn"
    >
      {
        theme === "light"
          ? <FaMoon />
          : <FaSun />
      }
    </button>
  );
}

export default ThemeToggle;