module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out forwards, moveTextUp 6s ease-in-out forwards',
        fadeCard1: 'fadeCard 1050ms ease-in-out 5000ms forwards',
        fadeCard2: 'fadeCard 1050ms ease-in-out 5250ms forwards',
        fadeCard3: 'fadeCard 1050ms ease-in-out 5500ms forwards',
        fadeCard4: 'fadeCard 1050ms ease-in-out 5750ms forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1}
        },
        moveTextUp: {
          '0%': {
            transform: 'translateY(200%)'
          }
        },
        fadeCard: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"]
  }
}
