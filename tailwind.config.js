/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-section": "url('/public/assets/svg/hero-section.svg')",
      },
      boxShadow: {
        'bottom-right': '10px 10px 20px rgba(0, 0, 0, 0.1)', // Shadow custom untuk bawah kanan
      },
    },
  },
  plugins: [],
};
