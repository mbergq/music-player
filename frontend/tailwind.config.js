module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,vue}"],
  plugins: [require("daisyui")],
  // purge: [
  //   "./components/**/*.{vue,js}",
  //   "./layouts/**/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./nuxt.config.{js,ts}",
  // ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#070707",
        info: "#f9fafb",
      },
    },
  },
};

/* @import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

body,
html {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
} */
