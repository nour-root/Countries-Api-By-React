import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { useState, useEffect } from "react";
function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      if (stored === "") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = window.document.documentElement;
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "");
    }
    if (localStorage.getItem("theme") === "dark") {
      root.classList.add("dark");
      document.body.classList.add("dark:bg-dark-secondary");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="relative z-10 bg-primary dark:text-white-text dark:bg-dark-primary shadow flex justify-between max-sm:px-6 px-8 py-6">
      <h1 className="capitalize font-semibold text-xl max-sm:text-lg">
        where in the world{" "}
      </h1>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="font-semibold flex items-center gap-2 cursor-pointer"
      >
        {!darkMode ? (
          <IoMoonOutline className="text-xl transform transition-all duration-100" />
        ) : (
          <GoSun className="text-xl transform transition-all duration-100" />
        )}
        <p className="capitalize">{darkMode ? "light" : "dark"} Mode</p>
      </button>
    </header>
  );
}
export default Header;
