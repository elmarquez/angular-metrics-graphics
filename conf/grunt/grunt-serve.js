module.exports = function(grunt) {
  grunt.registerTask('serve',
    'Compile app then start a local web server and API proxy',
    ['connect::keepalive', 'watch']
  );
};
