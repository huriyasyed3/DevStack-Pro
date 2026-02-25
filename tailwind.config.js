/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme Colors
        primary: "#3b82f6", 
        primaryForeground: "#ffffff",

        secondary: "#1e293b",
        secondaryForeground: "#f8fafc",

        muted: "#0f172a",
        mutedForeground: "#94a3b8",

        border: "#1e293b", 
        card: "#0b1224",   
        background: "#050a15", 

        success: "#22c55e",
        danger: "#ef4444",
        warning: "#f59e0b"
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px"
      },
      boxShadow: {
        // Glow effect for dark mode
        card: "0 8px 32px rgba(0,0,0,0.4)",
        soft: "0 2px 10px rgba(0,0,0,0.2)"
      }
    }
  },
  plugins: [require('tailwindcss-animate')],
}