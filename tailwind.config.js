/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.mask-gradient-to-bottom': {
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

