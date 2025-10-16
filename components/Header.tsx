"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle"; // ✅ Import du bouton

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 dark:text-gray-100 shadow-md sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Mathys Vanheulle
        </h1>

        <ul className="flex gap-6 items-center">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/projets"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </li>

          {/* ✅ Bouton de changement de thème */}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
