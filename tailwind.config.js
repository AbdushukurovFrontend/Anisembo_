export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Kontainerni markazlash
        padding: "1rem", // Har bir tomondan padding qo'shish
        screens: {
          sm: "640px", // Telefonlar
          md: "768px", // Planshetlar
          lg: "1024px", // O'rtacha noutbuklar
          xl: "1280px", // Katta noutbuklar
          "2xl": "1536px", // Juda katta ekranlar
        },
      },
    },
  },
  plugins: [],
};
