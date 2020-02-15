import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const themeTogglerStyle = {
  cursor: "pointer"
};

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={themeTogglerStyle}
      onClick={() => {
        setThemeMode(themeMode === "turquoise" ? "crimson" : "turquoise");
      }}
    >
      <span title="switch theme">
        {themeMode === "turquoise" ? "🌙" : "☀️"}
      </span>
    </div>
  );
};

export default ThemeToggler;
