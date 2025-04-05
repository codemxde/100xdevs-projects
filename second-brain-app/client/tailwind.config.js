/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5046e4",
        secondary: "#e0e7ff",
        secondaryText: "#493fcc",
        body: "#f9fafb",
        sidebarText: "#374151",
        cardIcon: "#9ca3af",
        brandColor: "#1f2937",
        mainTextColor: "#1b2331",
      },
    },
  },
  plugins: [],
};
