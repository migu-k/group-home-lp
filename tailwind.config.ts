import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf7f4',
          100: '#f5ede5',
          200: '#e8d9cc',
          300: '#d4c0ad',
          400: '#b8a088',
          500: '#9d8266',
          600: '#7d6852',
          700: '#665443',
          800: '#544638',
          900: '#463a2f',
        },
        accent: {
          50: '#fff8f0',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        warm: {
          50: '#fefaf6',
          100: '#fdf5eb',
          200: '#fae8d5',
          300: '#f5d4b8',
          400: '#edb891',
          500: '#e09a6a',
          600: '#c97d4f',
          700: '#a86542',
          800: '#8a5438',
          900: '#714630',
        },
      },
    },
  },
  plugins: [],
};
export default config;
