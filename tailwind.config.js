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
        'custom-drop': '6px 6px 8px rgba(0, 0, 0, 0.25)', 
      },
      container:{
        center: true
      }
    },
  },
  plugins: [],
};
