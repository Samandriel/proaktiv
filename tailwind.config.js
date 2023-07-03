/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'hsl(var(--color-hsl-primary) / <alpha-value>)',
      secondary: 'hsl(var(--color-hsl-secondary) / <alpha-value>)',
      tertiary: 'hsl(var(--color-hsl-tertiary) / <alpha-value>)',
      quaternary: 'hsl(var(--color-hsl-quaternary) / <alpha-value>)',
      quinary: 'hsl(var(--color-hsl-quinary) / <alpha-value>)',
    },
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
