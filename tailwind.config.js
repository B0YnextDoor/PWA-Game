/** @type {import('tailwindcss').Config} */
import { COLORS } from "./src/constants/color.constants.ts";
import plugin from "tailwindcss/plugin";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: COLORS,
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".primary-gradient": {
          background: `linear-gradient(to top, ${theme(
            "colors.orange.700"
          )}, ${theme("colors.orange.300")})`,
        },
        ".secondary-gradient": {
          background: `linear-gradient(to top, ${theme(
            "colors.brown.700"
          )}, ${theme("colors.brown.300")})`,
        },
        ".gray-gradient": {
          background: `linear-gradient(to top, ${theme(
            "colors.gray.500"
          )}, ${theme("colors.gray.300")})`,
        },
      });
    }),
  ],
};
