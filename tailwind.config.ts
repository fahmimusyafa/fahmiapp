import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1623",
        secondary: "#f0f0f0",
        tertiary: "#ff9f30",
        neutral: "#1c2b3a",
        surface: "#8b9bb4",
        accent: "#00ff9d",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        hero: "clamp(2.5rem, 5vw, 4rem)",
      },
      spacing: {
        section: "clamp(4rem, 8vw, 8rem)",
      },
      maxWidth: {
        container: "1280px",
      },
      borderWidth: {
        "1.5": "1.5px",
      },
      keyframes: {
        "line-draw": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "line-draw": "line-draw 0.3s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
      },
      transitionDuration: {
        default: "150ms",
      },
    },
  },
  plugins: [],
};

export default config;
