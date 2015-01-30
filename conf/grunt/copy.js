module.exports = {
  dist: {
    cwd: '<%= yeoman.app %>/',
    src: [ '**/*' ],
    dest: '<%= yeoman.dist %>/examples',
    expand: true
  },
  vendor: {
    cwd: 'vendor',
    src: [ '**/*', '!**/src/**/*', '!**/test/**/*' ],
    dest: '<%= yeoman.dist %>/examples/vendor',
    expand: true
  }
};
