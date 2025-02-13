/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-100": "hsl(0, 0%, 100%)",
        "neutral-200": "hsl(229, 52%, 96%)",
        "neutral-300": "hsl(227, 100%, 92%)",
        "neutral-800": "hsl(235, 35%, 18%)",
        "neutral-900": "hsl(234, 39%, 14%)",
        "primary-400": "hsl(0, 91%, 71%)",
        "primary-500": "hsl(182, 91%, 71%)",
        "primary-600": "hsl(284, 89%, 74%)",
      },
      spacing: {
        0: "0",
        0.5: "0.5rem",
        1: "1rem",
        1.5: "1.5rem",
        2: "2rem",
        2.5: "2.5rem",
        3: "3rem",
        3.5: "3.5rem",
        4: "4rem",
        4.5: "4.5rem",
        5: "5rem",
        5.5: "5.5rem",
        6: "6rem",
        6.5: "6.5rem",
        7: "7rem",
        7.5: "7.5rem",
        8: "8rem",
        8.5: "8.5rem",
        9: "9rem",
        9.5: "9.5rem",
        10: "10rem",
        20: "20rem"
      },
      fontFamily: {
        kumbhSans : ['"Kumbh Sans"', "sans-serif"],
        robotoSlab: ['"Roboto Slab"', "serif"],
        spaceMono: ['"Space Mono"', "monospace"]
      }
    },
  },
  plugins: [],
};
