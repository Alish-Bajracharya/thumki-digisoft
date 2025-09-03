/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      elegant: ['"Playfair Display"', 'serif'],
    },
    letterSpacing: {
      widest: '0.2em',
    },
    textShadow: {
      lg: '2px 2px 4px rgba(0,0,0,0.7)',
    },
      keyframes: {
              fadeIn: {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '50%': { opacity: 1, transform: 'translateY(10px)' },
                '100%': { opacity: 2, transform: 'translateY(0)' },
              },
            },
            animation: {
              fadeIn: 'fadeIn 1s ease-in-out',
            },
          },
        },
  plugins: [],
  
};
