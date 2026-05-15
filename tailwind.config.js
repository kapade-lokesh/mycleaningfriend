/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
    glow: "0 0 5px #2769c5, 0 0 10px #2769c5, 0 0 20px #2769c5, 0 0 40px rgba(39, 105, 197, 0.7)",
  }
    },
  },
  plugins: [],
};
