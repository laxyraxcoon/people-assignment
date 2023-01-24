/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#201547',
					secondary: '#e40046',
					error: '#ee2737',
					neutral: '#fa4616',
					warning: '#ff671f',
					info: '#ff8200',
					accent: '#5739c0',
					white: '#fff',
					darkgrey: '#3b3d47',
					almostblack: '#15151A'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
