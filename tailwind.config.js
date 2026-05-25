/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
        },
        ink: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#0a0a0b",
        },
      },
      fontFamily: {
        sans: ['"Cairo"', "system-ui", "Segoe UI", "Tahoma", "sans-serif"],
        display: ['"Cairo"', "system-ui", "Segoe UI", "Tahoma", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        display: ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(244, 63, 94, 0.35)",
        card: "0 4px 6px -1px rgb(0 0 0 / 0.06), 0 12px 24px -6px rgb(0 0 0 / 0.08)",
        "card-dark":
          "0 4px 6px -1px rgb(0 0 0 / 0.4), 0 18px 40px -12px rgb(0 0 0 / 0.55)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(244,63,94,0.18), transparent 55%)",
        "hero-glow-dark":
          "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(244,63,94,0.22), transparent 55%)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
