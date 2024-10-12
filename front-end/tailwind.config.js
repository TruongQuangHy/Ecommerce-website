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
      boxShadow: {
        "inner-custom":
          "inset 10px 0px 30px rgba(152, 109, 255, 0.3), inset 0px 10px 30px rgba(152, 109, 255, 0.3), inset -10px 0px 30px rgba(152, 109, 255, 0.3), inset 0px -10px 30px rgba(152, 109, 255, 0.3)",
        "inner-down": "-10px 0px 30px rgba(152, 109, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
