import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'morado-intenso': '#16122B',
        'amarillo': '#FCEE21',
        'purpura': '#662D91',
        'gris-palido': '#958D99',
        
        primary: {
          50: '#f5f2f8',
          100: '#ebe8f2',
          200: '#d7d0e5',
          300: '#c3b8d8',
          400: '#af9fcb',
          500: '#9b87be',
          600: '#7a6b95',
          700: '#59506d',
          800: '#38354c',
          900: '#16122B',
        },
        secondary: {
          50: '#fffef7',
          100: '#fffcee',
          200: '#fffada',
          300: '#fff8c7',
          400: '#fff6b3',
          500: '#FCEE21',
          600: '#cac41c',
          700: '#989a16',
          800: '#666f11',
          900: '#34450b',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
