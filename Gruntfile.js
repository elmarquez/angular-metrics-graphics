'use strict';

module.exports = function(grunt) {
  var path = require('path');

  // load the Grunt task definitions and configurations from the /conf/grunt
  // folder
  require('load-grunt-config')(grunt, {
    init: true,
    configPath: path.join(process.cwd(), 'conf', 'grunt'),
    loadGruntTasks: {
      pattern: 'grunt-*',
      config: require('./package.json'),
      scope: 'devDependencies'
    }
  });

  // Load package configuration
  grunt.config.set('pkg', grunt.file.readJSON('package.json'));

  // Load yeoman configuration
  var yeomanCfg = {
    app: require('./bower.json').appPath || 'src',
    dist: 'dist'
  };
  grunt.config.set('yeoman', yeomanCfg);

  // Load application manifest
  var manifest = grunt.file.readJSON('conf/manifest.json');
  grunt.config.set('manifest', manifest);

};
