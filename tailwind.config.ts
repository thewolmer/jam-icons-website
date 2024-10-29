import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        main: "#FFDC58",
        mainAccent: "#ffc800", // not needed for shadcn components
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#FEF2E8",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#374151",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#212121", // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: "5px",
      },
      boxShadow: {
        light: "3px 4px 0px 0px #000",
        dark: "3px 4px 0px 0px #000",
      },
      translate: {
        boxShadowX: "3px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-3px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "400",
        heading: "800",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
