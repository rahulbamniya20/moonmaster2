/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        shine: 'shine 3s linear infinite',
        twinkle: 'twinkle 5s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        twinkle: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}