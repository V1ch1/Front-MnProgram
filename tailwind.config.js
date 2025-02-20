export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scale-animation": "scaleAnimation 2s infinite", // Animación para escritorio
        "scale-animation-mobile": "scaleAnimationMobile 2s infinite", // Animación para móviles
      },
      colors: {
        "blue-custom": "#0067C0",
      },
      fontFamily: {
        shadows: ['"Shadows Into Light"', "cursive"],
      },
    },
  },
  plugins: [],
};
