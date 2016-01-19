import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/ractive-events-hover.js',
	plugins: [ babel() ],
	moduleName: 'Ractive.events.hover'
};
