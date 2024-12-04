/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-950': 'var(--color-navy-950)',
        'navy-900': 'var(--color-navy-900)',
        'navy-800': 'var(--color-navy-800)',
        'navy-700': 'var(--color-navy-700)',
        'electric-blue': 'var(--color-electric-blue)',
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': ['1rem', '1.5'],
        'lg': ['1.125rem', '1.6'],
        'xl': ['1.25rem', '1.6'],
        '2xl': ['1.5rem', '1.3'],
        '3xl': ['1.875rem', '1.3'],
        '4xl': ['2.25rem', '1.2'],
      },
    },
  },
  plugins: [],
};