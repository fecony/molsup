import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Euclid Circular A", ...fontFamily.sans] },
      fontSize: {
        h1: [
          "3.5rem",
          {
            lineHeight: "120%",
            fontWeight: "400",
          },
        ],
        h2: [
          "3rem",
          {
            lineHeight: "120%",
            fontWeight: "400",
          },
        ],
        h3: [
          "2.5rem",
          {
            lineHeight: "120%",
            fontWeight: "400",
          },
        ],
        h4: [
          "2rem",
          {
            lineHeight: "130%",
            fontWeight: "400",
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],
        h6: [
          "1.25rem",
          {
            lineHeight: "140%",
            fontWeight: "400",
          },
        ],

        xs: [
          "0.75rem",
          {
            lineHeight: "1.125rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.3125rem",
          },
        ],
        md: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.875rem",
          },
        ],
      },

      colors: {
        primary: {
          purple1: "#DCB9FF",
          purple2: "#EDDCFF",
          purple3: "#F6EDFF",
          dark1: "#201232",
          dark2: "#8F8898",
          dark3: "#C7C4CC",
          yellow1: "#EEFF55",
          yellow2: "#F4FF95",
          yellow3: "#FFFFCC",
        },
        secondary: {
          neutral: "#F0F0EC",
          light: "#F5F5F5",
          white: "#FFFFFF",
        },
        success: {
          dark: "#31b46e",
          medium: "#55C998",
          light: "#7BE5B8",
        },
        info: {
          dark: "#3e7ed2",
          medium: "#6185D5",
          light: "#8BA2E1",
        },
        warning: {
          dark: "#ffc107",
          medium: "#FFCE44",
          light: "#FFD766",
        },
        danger: {
          dark: "#de4d40",
          medium: "#E96C69",
          light: "#F08C8A",
        },
      },

      boxShadow: {
        elevation1: "3px 5px 10px 0px rgba(15, 22, 30, 0.07)",
        elevation2: "3px 8px 10px 0px rgba(15, 22, 30, 0.11)",
        elevation3: "3px 10px 13px 2px rgba(15, 22, 30, 0.17)",

        inner1: "inset 3px 5px 10px 0px rgba(15, 22, 30, 0.08)",
        inner2: "inset 3px 8px 10px 0px rgba(15, 22, 30, 0.12)",
        inner3: "inset 3px 10px 13px 3px rgba(15, 22, 30, 0.18)",

        glow1: "3px 3px 10px 3px rgba(191, 255, 0, 0.2)",
        glow2: "4px 4px 10px 4px rgba(191, 255, 0, 0.3)",
        glow3:
          "0px 0px 10px 6px rgba(191, 255, 0, 0.5), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },

      borderWidth: {
        1: "1px",
        2: "2px",
        4: "4px",
      },

      borderRadius: {
        sm: "2px",
        md: "4px",
        lg: "8px",
      },

      screens: {
        mobile: "400px",
        tablet: "720px",
        desktop: "1440px",
        presentation: "1400px",
      },

      spacing: {
        4: "4px",
        8: "8px",
        16: "16px",
        32: "32px",
        64: "64px",
        128: "128px",
        256: "256px",

        "inset-4": "4px",
        "inset-8": "8px",
        "inset-16": "16px",
        "inset-32": "32px",
        "inset-64": "64px",
        "inset-squish-8x16": "8px 16px",
        "inset-squish-16x32": "16px 32px",
        "inset-squish-32x64": "32px 64px",
        "inset-squish-64x128": "64px 128px",
      },

      margin: {
        "inset-4": "4px",
        "inset-8": "8px",
        "inset-16": "16px",
        "inset-32": "32px",
        "inset-64": "64px",
        "inset-squish-8x16": "8px 16px",
        "inset-squish-16x32": "16px 32px",
        "inset-squish-32x64": "32px 64px",
        "inset-squish-64x128": "64px 128px",
      },

      gap: {
        "inset-4": "4px",
        "inset-8": "8px",
        "inset-16": "16px",
        "inset-32": "32px",
        "inset-64": "64px",
        "inset-squish-8x16": "8px 16px",
        "inset-squish-16x32": "16px 32px",
        "inset-squish-32x64": "32px 64px",
        "inset-squish-64x128": "64px 128px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
