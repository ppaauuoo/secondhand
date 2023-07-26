/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#e23db6',

					secondary: '#deaaed',

					accent: '#ea7e70',

					neutral: '#191826',

					'base-100': '#38363a',

					info: '#1961f0',

					success: '#13a450',

					warning: '#eb8724',

					error: '#f0194b'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
