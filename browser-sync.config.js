const fs = require("node:fs");

module.exports = {
	files: ["src/*.html", "src/dist/*", "src/assets/*"],
	callbacks: {
		/**
		 * This 'ready' callback can be used
		 * to access the Browsersync instance
		 */
		ready: function (err, bs) {
			// example of adding a middleware at the end
			// of the stack after Browsersync is running
			bs.addMiddleware("*", function (req, res) {
				res.writeHead(301, {
					location: "home.html",
				});
				res.end("Redirecting!");
			});
		},
	},
	middleware: function (req, res, next) {
		req.headers["cache-control"] = "no-cache";
		next();
	},
	notify: true,
	reloadDebounce: 1000,
	rewriteRules: [
		{
			match: /@include\(\"(.*?)\"\)/g,
			fn: function (req, res, match) {
				let file = match.replace(/@include\(\"(.*?)\"\)/g, "$1");
				return fs.readFileSync("src/" + file, "utf8");
			},
		},
	],
};
