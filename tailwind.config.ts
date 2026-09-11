import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          DEFAULT: "#E4DDCE", // light mode background — stone/putty, not the stock cream
          dark: "#1B1712", // dark mode background — warm near-black, not pure grey
        },
        ink: {
          DEFAULT: "#241F18",
          soft: "#5C5548",
          inverse: "#F3EEE2",
        },
        amber: {
          DEFAULT: "#C88A2E", // primary accent — kiln-fire glaze
          soft: "#E0B36B",
        },
        moss: {
          DEFAULT: "#566246", // secondary accent — oxide glaze green
          soft: "#7C8A68",
        },
        rust: {
          DEFAULT: "#8A3B2B", // tertiary accent, used sparingly
        },
        line: {
          DEFAULT: "rgba(36, 31, 24, 0.14)",
          dark: "rgba(243, 238, 226, 0.14)",
        },
      },
      fontFamily: {
        slab: ["var(--font-slab)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "38rem",
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
