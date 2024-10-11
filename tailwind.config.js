/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "low-opacity-black": "rgba(0, 0, 0, 0.2)",
        "dark-navbar": "#2D2D33CC",
        "dark-navbar-button": "#444141",
        "dark-navbar-button-hover": "#57546B",
        "dark-main": "#1A1A1D",
        "text-color": "#F5F5F5",
      },
      lineHeight: {
        '16': '4rem',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

