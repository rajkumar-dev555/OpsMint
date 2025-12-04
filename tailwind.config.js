/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#405DE6',      // Instagram Blue
        accent: '#833AB4',      // Instagram Purple
        pink: '#E1306C',        // Instagram Pink
        orange: '#FD1D1D',       // Instagram Red
        yellow: '#FCB045',       // Instagram Orange
        charcoal: '#0D0D0D',     // Deep Charcoal
        'warm-white': '#F5F3E7', // Warm White
        'off-white': '#EAEAEA',  // Off-White
        'text-muted': '#C8C8C8', // Softer Off-White
        surface: '#141414',      // Card surface
        'surface-muted': '#1A1A1A', // Section surface
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 8px 24px rgba(0, 0, 0, 0.35)',
        'lg': '0 16px 40px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px)', opacity: '1' },
        },
        fillBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--width, 100%)' },
        },
        spin: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.1)' },
        },
        blob: {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '25%': {
            transform: 'translate(20px, -50px) scale(1.1)',
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '50%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
            borderRadius: '50% 60% 30% 60% / 30% 30% 70% 60%',
          },
          '75%': {
            transform: 'translate(50px, 50px) scale(1.05)',
            borderRadius: '60% 40% 60% 40% / 60% 30% 70% 40%',
          },
        },
        'float-shape': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.1',
          },
          '50%': {
            transform: 'translateY(-30px) rotate(180deg)',
            opacity: '0.2',
          },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fillBar: 'fillBar 2s ease-out forwards',
        spin: 'spin 20s linear infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        blob: 'blob 8s ease-in-out infinite',
        'float-shape': 'float-shape 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

