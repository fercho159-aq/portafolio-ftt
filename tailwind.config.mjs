/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100ch',
						color: 'white',
						'h1, h2, h3, h4': {
							color: 'white',
							fontWeight: '700',
						},
						'p, li': {
							color: 'rgb(255 255 255 / 70%)',
						},
						'blockquote p': {
							color: 'rgb(255 255 255 / 70%)',
						},
						'a': {
							color: '#A855F7',
							'&:hover': {
								color: '#9333EA',
							},
						},
						'pre': {
							backgroundColor: 'rgb(255 255 255 / 5%)',
							color: 'rgb(255 255 255 / 70%)',
						},
						'code': {
							color: '#A855F7',
							backgroundColor: 'rgb(168 85 247 / 0.1)',
							padding: '0.25rem',
							borderRadius: '0.25rem',
							fontWeight: '400',
						},
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
