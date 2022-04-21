module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out forwards, moveTextUp 3s ease-in-out 3s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1}
        },
        moveTextUp: {
          '100%': {
            transform: 'translateY(-900%)'
          }
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"]
  }
}
