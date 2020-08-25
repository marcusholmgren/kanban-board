const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
//const cssnano = require('cssnano');

const plugins = process.env.NODE_ENV === 'production'
	? [tailwind, autoprefixers]
	: [tailwind, autoprefixer];

module.exports = { plugins };
