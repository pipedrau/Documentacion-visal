import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D1117",
        foreground: "#E6EDF3",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "dark",
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              50: "#f0f9ff",
              100: "#e0f2fe",
              200: "#bae6fd",
              300: "#7dd3fc",
              400: "#38bdf8",
              500: "#0ea5e9",
              600: "#0284c7",
              700: "#0369a1",
              800: "#075985",
              900: "#0c4a6e",
              DEFAULT: "#0ea5e9",
              foreground: "#ffffff",
            },
          },
        },
        dark: {
          colors: {
            background: "#0D1117",
            foreground: "#E6EDF3",
            default: {
              50: "#1e2328",
              100: "#30363d",
              200: "#484f58",
              300: "#656d76",
              400: "#8b949e",
              500: "#b1bac4",
              600: "#c9d1d9",
              700: "#e1e4e8",
              800: "#f0f6fc",
              900: "#ffffff",
              DEFAULT: "#30363d",
              foreground: "#E6EDF3",
            },
            primary: {
              50: "#0c1426",
              100: "#161b22",
              200: "#21262d",
              300: "#30363d",
              400: "#484f58",
              500: "#58A6FF",
              600: "#79c0ff",
              700: "#a5d6ff",
              800: "#cae8ff",
              900: "#f0f6ff",
              DEFAULT: "#58A6FF",
              foreground: "#ffffff",
            },
            secondary: {
              50: "#0d1821",
              100: "#1b1f23",
              200: "#282e33",
              300: "#373e47",
              400: "#4d5566",
              500: "#656d76",
              600: "#848d97",
              700: "#acb2b9",
              800: "#c9d1d9",
              900: "#e6edf3",
              DEFAULT: "#656d76",
              foreground: "#ffffff",
            },
            success: {
              50: "#0d1a0d",
              100: "#0f2619",
              200: "#1a3826",
              300: "#238636",
              400: "#2ea043",
              500: "#46a758",
              600: "#57d467",
              700: "#7ce084",
              800: "#a6e8ab",
              900: "#d1f2d6",
              DEFAULT: "#238636",
              foreground: "#ffffff",
            },
            warning: {
              50: "#1a1306",
              100: "#2b1f0c",
              200: "#3d2e14",
              300: "#F59E0B",
              400: "#FCD34D",
              500: "#FDE68A",
              600: "#FEF3C7",
              700: "#FFFBEB",
              800: "#FFFDF7",
              900: "#FFFFFF",
              DEFAULT: "#F59E0B",
              foreground: "#1a1306",
            },
            danger: {
              50: "#1a0d0d",
              100: "#2b1516",
              200: "#3d1f20",
              300: "#F85149",
              400: "#FF7B7B",
              500: "#FFB3B3",
              600: "#FFD6D6",
              700: "#FFEBEB",
              800: "#FFF5F5",
              900: "#FFFFFF",
              DEFAULT: "#F85149",
              foreground: "#ffffff",
            }
          },
        },
      },
    })
  ],
};

export default config; 