/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{html,js,ts,jsx,tsx}',
		'./src/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				morange: '#F15D24',
				mgreen: '#297D3E',
			},
		},
	},
	plugins: [],
};
