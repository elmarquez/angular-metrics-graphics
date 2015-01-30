module.exports = function(grunt) {
  grunt.registerTask('test', 'Run test suite against the specified distribution.', [
    'compile',
    'protractor'
  ]);
};
