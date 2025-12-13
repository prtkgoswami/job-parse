"use client";
import { faInfo, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import AboutModal from "./AboutModal";
import { useState } from "react";

const Header = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <header className="bg-black flex justify-between items-center px-5 py-3 text-stone-300">
        <h3 className="text-2xl font-extralight">ParseJob</h3>
        <div className="flex gap-4">
          <button
            type="button"
            className="cursor-pointer text-1xl w-10 aspect-square border border-stone-300 rounded-lg hover:bg-stone-300 hover:text-stone-800 duration transition-colors ease-in-out"
            onClick={handleThemeSwitch}
          >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </button>
          <button
            type="button"
            className="cursor-pointer text-1xl w-10 aspect-square border border-stone-300 rounded-lg hover:bg-stone-300 hover:text-stone-800 duration transition-colors ease-in-out"
            onClick={() => setShowAboutModal(true)}
          >
            <FontAwesomeIcon icon={faInfo} />
          </button>
        </div>
      </header>
      <AboutModal
        isVisible={showAboutModal}
        theme={theme ?? "light"}
        onClose={() => setShowAboutModal(false)}
      />
    </>
  );
};

export default Header;
