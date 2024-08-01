import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'eckmannpsych-small': ['eckmannpsych-small', 'sans-serif'],
        'eckmannpsych-medium': ['eckmannpsych-medium', 'sans-serif'],
        'eckmannpsych-large': ['eckmannpsych-large', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
