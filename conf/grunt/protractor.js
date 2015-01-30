module.exports = {
  options: {
    configFile: "node_modules/protractor/example/conf.js", // Default config file
    keepAlive: true, // If false, the grunt process stops when the test fails.
    noColor: false, // If true, protractor will not use colors in its output.
    args: {
      // Arguments passed to the command
    }
  },
  dist: {
    options: {
      configFile: "conf/protractor/localhost.js",
      args: {}
    }
  }
};
