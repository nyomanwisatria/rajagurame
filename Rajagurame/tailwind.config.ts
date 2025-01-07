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
        color1: "#AD49E1", // Warna ungu
        color2: "#800000", // Warna merah maroon
      },
      spacing: {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "10%": "10%",
        "30%": "30%",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "acid"],
  },
};

export default config;
