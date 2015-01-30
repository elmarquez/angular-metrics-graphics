/**
 * Execute test suite using local Selenium host and application deployment.
 */
exports.config = {
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:8000/',
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true,
    silent: true
  },
  onPrepare: function () {
    // JUnit report
    // @see https://github.com/angular/protractor/blob/master/spec/junitOutputConf.js
    // @see https://github.com/angular/protractor/issues/60
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('target/junit', true, true));
    // Spec report
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStackTrace: true}));
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [ '../../test/spec/**/*.js' ]
};
