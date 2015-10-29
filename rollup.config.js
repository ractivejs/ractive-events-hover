import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/ractive-events-hover.js',
	dest: 'dist/ractive-events-hover.js',
	format: 'umd',
	plugins: [ babel() ],
	moduleName: 'Ractive.events.hover'
};
