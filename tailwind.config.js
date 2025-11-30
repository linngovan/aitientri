/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        background: '#020617', // Slate 950 - Deep Navy Blue
        surface: '#0f172a',    // Slate 900
        surfaceLight: '#1e293b', // Slate 800
        primary: '#8b5cf6',    // Violet 500
        secondary: '#94a3b8',  // Slate 400
        accent: '#38bdf8',     // Sky 400
        white: '#f8fafc',      // Slate 50
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'blob': 'blob 7s infinite',
        'wander': 'wander 15s ease-in-out infinite',
        'wander-slow': 'wander 20s ease-in-out infinite',
        'wander-reverse': 'wander-reverse 18s ease-in-out infinite',
        'float': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        wander: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(50px, -80px) scale(1.1)' },
          '50%': { transform: 'translate(-40px, 60px) scale(0.9)' },
          '75%': { transform: 'translate(30px, 30px) scale(1.05)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'wander-reverse': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(-50px, 60px) scale(0.9)' },
          '50%': { transform: 'translate(40px, -40px) scale(1.1)' },
          '75%': { transform: 'translate(-30px, -20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        }
      }
    }
  },
  plugins: [],
}
