/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-batman": {
          "clip-path":
            "polygon(45% 0,45% 5%,50% 1%,55% 5%,55% 0,60% 20%,90% 25%,95% 95%,80% 75%,65% 100%,35% 100%,20% 75%,5% 95%,15% 25%,40% 20%)",
        },
        ".clip-roster": {
          "clip-path":
            "polygon(20% 0, 80% 0%, 85% 100%, 15% 100%)",
        },
      });
    },
  ],
};
