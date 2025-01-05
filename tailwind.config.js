/** @type {import('tailwindcss').Config} */
export const content = ["./docs/.vitepress/**/*.{vue,js}", "./docs/**/*.md"];
export const theme = {
  extend: {
    colors: {
      VPLight: "#3451b2",
      VPDark: "#a8b1ff",
    },
  },
};
export const plugins = [];
export const darkMode = "class";
