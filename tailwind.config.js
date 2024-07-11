/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Groztec: ['Groztec', 'sans-serif'],
        SctoGrotesk: ['Scto Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        christophe: "url('/images/team/Christophe.png')",
        guillaume: "url('/images/team/Guillaume.png')",
        stanislas: "url('/images/team/Stanislas.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
