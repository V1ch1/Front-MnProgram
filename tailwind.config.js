export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'scale-animation': 'scaleAnimation 2s infinite', // Animación para escritorio
        'scale-animation-mobile': 'scaleAnimationMobile 2s infinite', // Animación para móviles
      },
    },
  },
  plugins: [],
};
