const path = require("path");

module.exports = {
	entry: {
		"main.js": "./src/main.js",
	},
	output: {
		filename: "[name]",
		path: path.resolve(__dirname, "src/dist"),
	},
	mode: "development",
	watch: true,
};
