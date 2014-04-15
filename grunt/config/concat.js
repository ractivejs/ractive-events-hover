module.exports = {
	bundle: {
		src: 'src/ractive-events-hover.js',
		dest: 'tmp/ractive-events-hover.js'
	},
	options: {
		process: {
			data: {
				VERSION: '<%= pkg.version %>'
			}
		}
	}
};
