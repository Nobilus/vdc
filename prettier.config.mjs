/** @type {import("prettier").Config} */
const config = {
  useTabs: false,
  tabWidth: 2,
  endOfLine: 'lf',
  printWidth: 160,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
