/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,jsx,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'strongPurpleTwitch': 'rgb(100,65,165)',
        'lightPurpleTwitch': 'rgb(185,163,227)',
        'BlackTwitch': 'rgb(38,38,38)',
        'whiteTwitch': 'rgb(241,241,241)',
      },
    },
  },
  plugins: [],
}

