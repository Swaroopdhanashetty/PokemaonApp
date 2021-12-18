module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rock: "rgb(148, 81, 81)",

        ghost: "rgb(247, 247, 247)",

        electric: "rgb(255, 255, 161)",

        bug: "#F6D6A7",

        poison: "#e0a7f6",

        normal: "#F4F4F4",

        fairy: "rgba(255, 192, 203, 0.863)",

        fire: " #FBE3DF",

        grass: "#E2F9E1",

        water: "#E0F1FD",
        ground: "#D8A2C6",
        fighting: "#BDA9DD",
      },

      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
