/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#49b9f8',
        'secondary': '#021468',
        'bg-icon':'#2567b0',
      },
    keyframes: {
      menuIn: {
        '0%': { opacity: '0', transform: 'translateY(-20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      },
      menuOut: {
        '0%': { opacity: '1', transform: 'translateY(0)' },
        '100%': { opacity: '0', transform: 'translateY(-20px)' }
      }
    },
    animation: {
      'menu-in': 'menuIn 300ms ease-out forwards',
      'menu-out': 'menuOut 300ms ease-in forwards'
    }
  }
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('flowbite/plugin'),
  ],
}