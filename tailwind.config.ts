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
      colors: {
        // === Backgrounds ===
        background: {
          light: "#FFFFFF",
          dark: "#1E1E1E",
        },

        // === Cards ===
        card: {
          light: "#F9FAFB",
          dark: "#2A2A2A",
        },

        // === Text ===
        text: {
          light: "#333333",
          dark: "#F5F5F5",
        },

        // === Accents ===
        accent: {
          green: "#4CAF50",
          orange: "#FF9800",
          blue: "#007BFF",
        },

        // === Dividers / Borders ===
        divider: {
          light: "#E0E0E0",
          dark: "#333333",
        },

        // === Header ===
        header: {
          light: "#F9FAFB", // same as card light
          dark: "#2A2A2A", // same as card dark
        },

        // === Footer ===
        footer: {
          light: "#F9FAFB", // consistent light gray
          dark: "#2A2A2A", // same as card dark
        },

        // === Buttons ===
        btnPrimary: {
          light: "#4CAF50", // Green for new idea
          dark: "#43A047",
        },
        btnSecondary: {
          light: "#E0E0E0", // Subtle gray
          dark: "#444444",
        },
        btnDanger: {
          light: "#EF4444", // Red for delete
          dark: "#DC2626",
        },
        btnAccent: {
          light: "#007BFF", // Blue for save, confirm
          dark: "#1E40AF",
        },
      },
      boxShadow: {
        btn: "0 2px 6px rgba(0, 0, 0, 0.15)", // Default button shadow
        btnHover: "0 4px 10px rgba(0, 0, 0, 0.2)", // Stronger hover state
        btnInset: "inset 0 2px 4px rgba(0, 0, 0, 0.06)", // Optional for pressed/active look
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
