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
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: '#FFFFFF',
  			foreground: '#000000',
  			primary: {
  				DEFAULT: '#215732',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#E8ECEB',
  				foreground: '#000000'
  			},
  			accent: {
  				DEFAULT: '#2e7d47',
  				foreground: '#FFFFFF'
  			},
  			muted: {
  				DEFAULT: '#6C757D',
  				foreground: '#FFFFFF'
  			},
  			card: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#000000'
  			},
  			destructive: {
  				DEFAULT: '#DC3545',
  				foreground: '#FFFFFF'
  			},
  			border: '#D1D5DB',
  			input: '#E8ECEB',
  			ring: '#215732',
  			chart: {
  				'1': '#215732',
  				'2': '#4A7862',
  				'3': '#6B9080',
  				'4': '#A4C3B2',
  				'5': '#CCE3DE'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
