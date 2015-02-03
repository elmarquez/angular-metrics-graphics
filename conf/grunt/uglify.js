module.exports = {
  dist: {
    files: {
      '<%= yeoman.dist %>/angular-metrics-graphics.min.js': [
        '<%= yeoman.dist %>/angular-metrics-graphics.js'
      ]
    }
  },
  options: {
    banner: '/* Compiled <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n',
    sourceMap: true
  }
};
