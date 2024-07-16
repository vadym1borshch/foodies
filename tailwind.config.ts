import type { Config } from "tailwindcss";
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(90deg, #d97706, #92400e)',
      },
      textShadow: {
        'custom': '0 0 18px rgba(248, 190, 42, 0.8)',
      },
      clipPath: {
        'custom-shape': 'polygon(0 0, 100% 0, 100% 75%, 0 100%)',
      },
      colors: {
        main: 'linear-gradient(90deg, #fde68a, #fbbf24)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient': {
          'background': 'linear-gradient(90deg, #fef08a, #facc15)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-shadow': {
          'text-shadow': '0 0 18px rgba(248, 190, 42, 0.8)',
        },
        '.bg-gradient': {
          'background-image': 'linear-gradient(90deg,  #d97706, #92400e)',
        },
      });
    }
  ],
};
export default config;
