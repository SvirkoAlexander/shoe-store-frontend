/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{html,js,jsx}"
	],
	theme: {
		fontFamily: {
			oswald: "Oswald, sans-serif",
			urbanist: "Urbanist, sans-serif",
			amatic: 'Amatic SC',
			monserat: "Montserrat",

		},
		extend: {},
	},
	plugins: [],
}

