module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"font-primary": "#6B7280",
				"grey-border": "#D1D5DB",
				"grey-4b": "#4B5563",
				"gr-1": "#AC32E4",
				"gr-2": "#7918F2",
				"gr-3": "#4801FF",
				"font-white": "#FFFFFF !important",
			},
		},
	},
	plugins: [],
};
