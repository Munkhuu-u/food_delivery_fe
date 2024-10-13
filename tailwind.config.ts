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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#F7F7F8",
        darkgray: "#ECEDF0",
        disabledGrayFill: "#EEEFF2",
        disabledGrayText: "#1C20243D",
        enabledGreenFill: "#18BA51",
      },
    },
  },
  plugins: [],
};
export default config;
