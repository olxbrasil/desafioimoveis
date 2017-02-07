var sass = require('node-sass'),
	path = require('path');

// cmrh.conf.js
module.exports = {
	extensions: ['.scss'],
	generateScopedName: '[local]',
	preprocessCss: function (css, filepath) {
		var result =  sass.renderSync({
			data: css,
			includePaths: [ path.resolve(filepath, '..') ]
		});

		return result.css;
	},
};
