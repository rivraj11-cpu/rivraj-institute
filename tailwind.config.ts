import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#000000",
          slate: "#0F172A",
          dark: "#111827",
          gold: "#D4AF37",
          amber: "#FBBF24",
          surface: "rgba(17, 24, 39, 0.72)",
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #FBBF24 50%, #996515 100%)",
        "gold-metallic": "linear-gradient(180deg, #FFF7D6 0%, #D4AF37 60%, #875C13 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        "luxury-gold": "0 10px 30px -10px rgba(212, 175, 55, 0.3)",
        "luxury-glow": "0 0 50px -10px rgba(212, 175, 55, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
