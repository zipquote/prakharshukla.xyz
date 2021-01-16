// eslint-disable-next-line no-undef
module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
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
        'jetbrains-light': ['Jetbrains Light', 'sans-serif'],
        'jetbrains-medium': ['Jetbrains Medium', 'sans-serif'],
        'jetbrains-bold': ['Jetbrains Bold', 'sans-serif'],
        'jetbrains-extra-bold': ['Jetbrains  Extra Bold', 'sans-serif'],
        zoika: ['Zoika', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
