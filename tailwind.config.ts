import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		boxShadow: {
  			teal: '0px 4px 4px 0px rgba(0, 173, 181, 0.5)'
  		},
  		colors: {
  			brandColor: '#2fcbe0',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
