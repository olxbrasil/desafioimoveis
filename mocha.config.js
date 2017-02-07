let chai = require('chai'),
	chaiEnzyme = require('chai-enzyme'),
	hook = require('css-modules-require-hook'),
	path = require('path'),
	sass = require('node-sass'),
	jsdom = require('jsdom').jsdom;

hook({
	extensions: ['.scss'],
	generateScopedName: '[local]',
	preprocessCss: function (css, filepath) {
		var result = sass.renderSync({
			data: css,
			includePaths: [path.resolve(filepath, '..')]
		});

		return result.css;
	},
});

global.should = chai.should();
global.assert = chai.assert;
global.expect = chai.expect;


chai.use(chaiEnzyme());

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
	if (typeof global[property] === 'undefined') {
		global[property] = document.defaultView[property];
	}
});

global.navigator = {
	userAgent: 'node.js'
};
