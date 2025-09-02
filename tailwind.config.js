/** @type {import('tailwindcss').Config} */
module.exports = {
	"content": [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	"theme": {
		"extend": {
			"colors": {
				"gray": {
					"100": "#27272a",
					"200": "#18181b",
					"300": "#111112",
					"400": "#09090b",
					"500": "rgba(39, 39, 42, 0.8)",
					"600": "rgba(24, 24, 27, 0.6)",
					"700": "rgba(255, 255, 255, 0.15)",

				},
				
				"gold": {
					"100": "#ffe55e",
					"200": "#f5c518"
				},

				"goldenrod": {
					"100": "#d9a32e",
					"200": "rgba(217, 163, 46, 0.1)",
				
				},
				"black": "#000",
				"darkslategray": "#3f3f46",
				"lightpink": "#fca5a5",
				"salmon": "#f87171",
				"crimson": "#ef4444",
				"dimgray": "#52525b",

				"white": "#fff",
				"darkgray": "#a1a1aa",
				"black": "#000",
				"lightgray": "#d4d4d8",
				"gainsboro": "#e4e4e7",
				"darkslategray": "#3f3f46"
			},


			"fontFamily": {
				"dm-sans": "DM Sans",
				"staatliches": "Staatliches",
				"inherit": "inherit"
			}
		}
	},
	"corePlugins": {
		"preflight": false
	},
	
	
}