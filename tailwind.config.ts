import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ Active le mode sombre basé sur une classe
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
