/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent': '#f97316',
				'primary': '#22d3ee',
				'secondary': '#e879f9',
				gray: {
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#2e1065',
				},
				screens: {
					'xs': '280px',
				},
				margin: {
					'auto-xs': 'auto', // Define margin auto for XS devices
				},
				spacing: {
					'5-custom': '0px',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
