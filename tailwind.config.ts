import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

// /* Success Colors */
// --success-900: #3b6506;
// --success-800: #4c7a0b;
// --success-700: #659711;
// --success-600: #7fb519;
// --success-500: #9cd323; /* Default */
// --success-400: #bce455;
// --success-300: #d3f178;
// --success-200: #e8faa6;
// --success-100: #f5fcd2;

// /* Error Colors */
// --error-100: #ffe7d3;
// --error-200: #ffc8a6;
// --error-300: #ffa37a;
// --error-400: #ff7f59;
// --error-500: #ff4423; /* Default */
// --error-600: #db2719;
// --error-700: #b71112;
// --error-800: #930b16;
// --error-900: #7a0619;

// /* Warning Colors */
// --warning-100: #fff8d7;
// --warning-200: #FFFB0;
// --warning-300: #ffe488;
// --warning-400: #ffd96b;
// --warning-500: #ffc73a; /* Default */
// --warning-600: #dba32a;
// --warning-700: #b7821d;
// --warning-800: #936312;
// --warning-900: #7a4d0b;

// /* Information Colors */
// --info-100: #dcf3ff;
// --info-200: #bae5ff;
// --info-300: #9bd3ff;
// --info-400: #7ec2ff;
// --info-500: #54a6ff; /* Default */
// --info-600: #3d81db;
// --info-700: #2a60b7;
// --info-800: #1a4393;
// --info-900: #102e7a;

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
      },
      lineHeight: {
        auto: "1",
        "100": "100%",
        "110": "110%",
        "120": "120%",
        "130": "130%",
        "140": "140%",
        "150": "150%",
        "160": "160%",
        "170": "170%",
        "180": "180%",
        "190": "190%",
        "200": "200%",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "var(--ring)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          900: "var(--primary-900)",
          800: "var(--primary-800)",
          700: "var(--primary-700)",
          600: "var(--primary-600)",
          500: "var(--primary-500)",
          400: "var(--primary-400)",
          300: "var(--primary-300)",
          200: "var(--primary-200)",
          100: "var(--primary-100)",
          0: "var(--primary-0)",
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          900: "var(--secondary-900)",
          800: "var(--secondary-800)",
          700: "var(--secondary-700)",
          600: "var(--secondary-600)",
          500: "var(--secondary-500)",
          400: "var(--secondary-400)",
          300: "var(--secondary-300)",
          200: "var(--secondary-200)",
          100: "var(--secondary-100)",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          900: "var(--success-900)",
          800: "var(--success-800)",
          700: "var(--success-700)",
          600: "var(--success-600)",
          500: "var(--success-500)",
          400: "var(--success-400)",
          300: "var(--success-300)",
          200: "var(--success-200)",
          100: "var(--success-100)",
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        error: {
          900: "var(--error-900)",
          800: "var(--error-800)",
          700: "var(--error-700)",
          600: "var(--error-600)",
          500: "var(--error-500)",
          400: "var(--error-400)",
          300: "var(--error-300)",
          200: "var(--error-200)",
          100: "var(--error-100)",
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        warning: {
          900: "var(--warning-900)",
          800: "var(--warning-800)",
          700: "var(--warning-700)",
          600: "var(--warning-600)",
          500: "var(--warning-500)",
          400: "var(--warning-400)",
          300: "var(--warning-300)",
          200: "var(--warning-200)",
          100: "var(--warning-100)",
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          900: "var(--info-900)",
          800: "var(--info-800)",
          700: "var(--info-700)",
          600: "var(--info-600)",
          500: "var(--info-500)",
          400: "var(--info-400)",
          300: "var(--info-300)",
          200: "var(--info-200)",
          100: "var(--info-100)",
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
