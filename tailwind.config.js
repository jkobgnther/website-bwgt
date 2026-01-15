/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Using block green color
        primary: {
          50: '#f0f9f5',
          100: '#d4ede0',
          200: '#b8e1cb',
          300: '#9cd5b6',
          400: '#80c9a1',
          500: '#7FBF97', // Main block green
          600: '#6ba87f',
          700: '#579167',
          800: '#437a4f',
          900: '#2f6337',
        },
        // Yellow from blocks
        yellow: {
          50: '#fefef0',
          100: '#fdfde0',
          200: '#fbfbc0',
          300: '#f9f9a0',
          400: '#f7f780',
          500: '#EEEA63', // Main block yellow
          600: '#d4d059',
          700: '#bab64f',
          800: '#a09c45',
          900: '#86823b',
        },
        // Green from blocks
        green: {
          50: '#f0f9f5',
          100: '#d4ede0',
          200: '#b8e1cb',
          300: '#9cd5b6',
          400: '#80c9a1',
          500: '#7FBF97', // Main block green
          600: '#6ba87f',
          700: '#579167',
          800: '#437a4f',
          900: '#2f6337',
        },
        // Blue from blocks
        blue: {
          50: '#f0fafa',
          100: '#d4f0f0',
          200: '#b8e6e6',
          300: '#9cdcdc',
          400: '#80d2d2',
          500: '#B2DFDA', // Main block blue
          600: '#9fc9c4',
          700: '#8cb3ae',
          800: '#799d98',
          900: '#668782',
        },
        // Purple from blocks
        purple: {
          50: '#f5f3f6',
          100: '#e8e3ea',
          200: '#dbd3de',
          300: '#cec3d2',
          400: '#c1b3c6',
          500: '#9C849E', // Main block purple
          600: '#8c768e',
          700: '#7c687e',
          800: '#6c5a6e',
          900: '#5c4c5e',
        },
        // Accent colors for variety
        accent: {
          yellow: '#ffeb3b',
          green: '#64ad77',
          purple: '#9c27b0',
          teal: '#00bcd4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

