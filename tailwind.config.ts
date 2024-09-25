import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        AppPrimary:"0A2463", 
        AppSecondary:"3E92CC",
        AppTertiary:"D8315B",
        AppHeading:"D8315B",
        AppBody:"FFFAFF",
        AppPop:"0A2463",
      },
        background: "var(--background)",
        foreground: "var(--foreground)",
    },
  },
  plugins: [],
};
export default config;
