module.exports = {
  options: {
    port: 9000,
    // Change this to '0.0.0.0' to access the server from outside.
    hostname: 'localhost'
    //livereload: 35729
  },
  dist: {
    options: {
      open: true,
      base: '<%= yeoman.dist %>/examples'
    }
  },
  livereload: {
    options: {
      open: true,
      middleware: function (connect) {
        return [
          connect.static('<%= yeoman.app %>')
        ];
      }
    }
  },
  test: {
    options: {
      port: 9001,
      middleware: function (connect) {
        return [
          connect.static('test'),
          connect.static('<%= yeoman.app %>/examples')
        ];
      }
    }
  }
};
