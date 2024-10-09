/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#000000",
        dark: "#09090a",
        primary: "#FFD700",
        primarySec: "#986DFF",
        white: "#FFFFFF",
        box: "#C0C0C0",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        Noto: ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
};
