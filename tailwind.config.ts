import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        laub: {
          50: "#EFF5EC",
          100: "#D6E8D1",
          200: "#ACCFA4",
          300: "#81B477",
          400: "#5A9650",
          500: "#3A7A33",
          600: "#2C5E27",
          700: "#21481D",
          800: "#193817",
          900: "#10260F"
        },
        erde: {
          50: "#F9F2E9",
          100: "#F0E0CB",
          200: "#E0C19C",
          300: "#CB9F6D",
          400: "#B8844A",
          500: "#9F6B36",
          600: "#82552B",
          700: "#634120",
          800: "#4A2F18",
          900: "#311F10"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
