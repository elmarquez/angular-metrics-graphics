module.exports = {
  dist: {
    cwd: '<%= yeoman.app %>/',
    src: [ '**/*' ],
    dest: '<%= yeoman.dist %>/examples',
    expand: true
  },
  lib:{
    src: '<%= yeoman.app %>/scripts/directives/chart.js',
    dest: '<%= yeoman.dist %>/angular-metrics-graphics.js',
    expand: false
  },
  vendor: {
    cwd: 'vendor',
    src: [ '**/*', '!**/src/**/*', '!**/test/**/*' ],
    dest: '<%= yeoman.dist %>/examples/vendor',
    expand: true
  }
};
