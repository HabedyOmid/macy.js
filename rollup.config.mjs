import babel from '@rollup/plugin-babel';
// import { uglify } from '@rollup/plugin-uglify';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: './src/macy.js',
  output: {
    file: './dist/macy.js', // Output filename
    format: 'iife', // Output format (Immediately Invoked Function Expression)
    name: 'Macy', // Global variable name in the browser
    // sourcemap: true, // Generate sourcemap
	},
	plugins: [resolve(), babel({ babelHelpers: 'bundled' })]
};