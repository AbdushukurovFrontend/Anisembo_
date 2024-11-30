export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "12px", // 2rem (default)
          sm: "12px", // 2rem (for small screens)
          md: "20px", // 3rem (for medium screens)
          lg: "28px", // 4rem (for large screens)
          xl: "36px", // 5rem (for extra large screens)
          "2xl": "36px", // 5rem (for 2xl screens)
        },
      },
    },
  },
  plugins: [],
};
