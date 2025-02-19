import type { Config } from "tailwindcss";

export default {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        teal: "0px 4px 4px 0px rgba(0, 173, 181, 0.5)", // Adjust the color and opacity as needed
      },
      colors: {
        brandColor: "#2fcbe0",
      },
    },
  },
  plugins: [],
} satisfies Config;
