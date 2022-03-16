const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        l2: "#334366",
        l1: "#192133",
      },
      backgroundImage: {
        "gradient-l0": "linear-gradient(to bottom, #141b29, #0c111b 300px)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        "text-white-opacity": (value) => ({
          color: `rgba(255, 255, 255, ${value})`,
        }),
        "bg-white-opacity": (value) => ({
          backgroundColor: `rgba(255, 255, 255, ${value})`,
        }),
      });
    }),
  ],
};
