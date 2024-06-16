/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        slide: "slide 6s ease-in-out infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        slide: {
          "0%, 33%": { transform: "translateY(100%)" },
          "40%, 60%": { transform: "translateY(0%)" },
          "67%, 100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
