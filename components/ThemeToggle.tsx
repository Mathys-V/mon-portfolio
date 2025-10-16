"use client"; // Nécessaire pour interagir avec le navigateur (localStorage)

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Petites icônes stylées (installe-les juste après)

export default function ThemeToggle() {
  // État local du thème : "light" ou "dark"
  const [theme, setTheme] = useState("light");

  // ✅ Au montage du composant, on lit le thème stocké dans le localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // ✅ Fonction appelée quand on clique sur le bouton
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition"
      aria-label="Changer le thème"
    >
      {theme === "light" ? (
        <Moon className="text-gray-700 dark:text-gray-300 w-5 h-5" />
      ) : (
        <Sun className="text-yellow-400 w-5 h-5" />
      )}
    </button>
  );
}
