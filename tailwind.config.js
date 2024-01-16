/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1ED760',
        primaryhover: '#10D760',
        dark: '#0F0F0F',
      },
      fontSize: {
        'nametag': 'clamp(0.875rem, 1.25vw, 1.25rem)'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'designer': 'designer 7s linear infinite',
        'developer': 'developer 8s linear infinite',
        'heart-beat': 'heartBeat 1s infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },

        designer: {
          '0%,100%': { right: '15%', bottom: '20%' },
          '25%': { right: '25%', bottom: '40%' },
          '50%': { right: '15%', bottom: '60%' },
          '75%': { right: '5%', bottom: '50%' },
        },

        developer: {
          '0%,100%': { left: '15%', bottom: '50%' },
          '25%': { left: '25%', bottom: '65%' },
          '50%': { left: '35%', bottom: '30%' },
          '75%': { left: '25%', bottom: '20%' },
        },

        heartBeat: {
          '0%': {transform: 'scale(1)'},
          '14%': {transform: 'scale(1.3)'},
          '28%': {transform: 'scale(1)'},
          '42%': {transform: 'scale(1.3)'},
          '70%': {transform: 'scale(1)'},
      }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}