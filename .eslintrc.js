module.exports = {
	"env": {
		"mocha": true
	},
	"extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
		"mocha"
  ],
  "env": {
    "browser": true,
    "node": true,
		"jquery": true
  },
  "rules": {
    "indent": [2, "tab"],
		"no-tabs": 0,
		"consistent-return": 0,
		"strict": 0,
		"no-console": 0,
		"no-underscore-dangle": 0,
		"no-unused-expressions": 0,
		"no-param-reassign": 0,
		"import/no-extraneous-dependencies": 0,
		"no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "should|expect"
      }
    ]
  },
	"globals": {
		"describe": true,
		"it": true,
		"expect": true,
		"context": true,
		"beforeEach": true,
		"afterEach": true
	}
};
