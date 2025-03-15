import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        swipe: 'swipper 10s linear infinite',
      },
      keyframes: {
        swipper: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

