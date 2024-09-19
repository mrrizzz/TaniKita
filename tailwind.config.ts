import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#FFFFFF", // White background
        foreground: "#000000", // Black text
        primary: {
          DEFAULT: "#215732", // Dark green from the logo and buttons
          foreground: "#FFFFFF", // White text on primary color
        },
        secondary: {
          DEFAULT: "#E8ECEB", // Light gray used in card backgrounds
          foreground: "#000000", // Black text on secondary color
        },
        accent: {
          DEFAULT: "#2e7d47", // Lighter green used in some elements
          foreground: "#FFFFFF", // White text on accent color
        },
        muted: {
          DEFAULT: "#6C757D", // Muted text color
          foreground: "#FFFFFF", // White text on muted background
        },
        card: {
          DEFAULT: "#FFFFFF", // White card background
          foreground: "#000000", // Black text on card
        },
        destructive: {
          DEFAULT: "#DC3545", // Standard red for destructive actions
          foreground: "#FFFFFF", // White text on destructive background
        },
        border: "#D1D5DB", // Light gray for borders
        input: "#E8ECEB", // Light gray for input backgrounds
        ring: "#215732", // Dark green for focus rings
        chart: {
          "1": "#215732", // Dark green
          "2": "#4A7862", // Medium green
          "3": "#6B9080", // Light green
          "4": "#A4C3B2", // Very light green
          "5": "#CCE3DE", // Pale green
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
