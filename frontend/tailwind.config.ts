import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      backGroundColor: "#F2F4F6",
      white: "#FFFFFF",
      black: "#000000",
      outerBackgroundColor: "#111111",
      brandColor: "#26ad9c",
      buttonBackgroundColor: "#F2F4F6",
      subtextColor: "#ABB1B6",
      
    },
    extend: {
      fontFamily: {
        "Pretendard-Regular": ["Pretendard-Regular"],
        "Pretendard-ExtraBold": ["Pretendard-ExtraBold"],
        "Pretendard-SemiBold": ["Pretendard-SemiBold"],
      },
    },
  },
  plugins: [],
};
export default config;
