module.exports = (wallaby) => {
	files: ['setup.js'],
	tests: ['setup_test.js'],
	testFramework: 'mocha',
	compilers: {
		'setup_test.js': wallaby.compilers.babel()
	},
}
