import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        butler: ['Butler', 'serif'],
        'butler-bold': ['Butler Bold', 'serif'],
        'butler-light': ['Butler Light', 'serif'],
        'butler-medium': ['Butler Medium', 'serif'],
        'butler-extra-bold': ['Butler Extra Bold', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        jetbrains: ['Jetbrains', 'sans-serif'],
        zoika: ['Zoika', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
