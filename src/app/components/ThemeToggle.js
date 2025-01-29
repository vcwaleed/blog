'use client'
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.theme
      ? localStorage.theme
      : "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
      }
      className="relative flex items-center justify-center w-14 h-7  bg-gray-300 rounded-full dark:bg-gray-700 transition-all  "
    >
      <div
        className={`absolute w-5 h-5  mr-7 bg-white rounded-full  shadow-md transform transition-all ${theme === "dark" ? "translate-x-6" : "translate-x-1"
          }`}
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-gray-800 dark:text-gray-200 m-auto" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500 m-auto" />
        )}
      </div>
    </button>
  );
}
