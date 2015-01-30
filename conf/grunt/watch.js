module.exports = {
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [
      'conf/manifest.json',
      'src/**/*.*'
    ],
    tasks: ['compile']
  },
  sass: {
    files: ['src/main/webapp/sass/**/*'],
    tasks: ['sass']
  }
};
