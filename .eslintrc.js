module.exports = {
	env: {
		es6: true,
		browser: true,
		greasemonkey: true
	},
	rules: {
		"no-use-before-define": [2, "nofunc"]
	},
	extends: "eslint:recommended"
};
