/**
 * Build application HTML page
 */
module.exports = {
  options: {
    data: '<%= manifest %>'
  },
  dist: {
    files: {
      '<%= yeoman.dist %>/examples/index.html': [ '<%= yeoman.app %>/index.html' ]
    }
  }
};
