import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="z-40 fixed flex w-full h-20 items-center justify-end pr-7 transition-all duration-500 ease-in-out">
      <FontAwesomeIcon
        className="text-3xl bg-[var(--svg-bg)] text-[var(--svg)] inline-block w-[3rem] h-[3rem] cursor-pointer rounded-3xl p-3"
        onClick={toggleDarkMode}
        icon={darkMode ? faSun : faMoon}
      />
    </div>
  );
};

export default Header;
