Angular MetricsGraphics Directive
=================================

An Angular directive that encapsulates the Mozilla MetricsGraphics library,
providing easy configuration.

[![Build Status](https://travis-ci.org/elmarquez/angular-metrics-graphics.svg?branch=master)](https://travis-ci.org/elmarquez/angular-metrics-graphics)


Installation
------------

Use Bower to automatically install the library and its dependencies in your project:

    bower install -S angular-metrics-graphics


Dependencies
------------

The library has the following runtime dependencies:

 * Angular.js
 * D3.js
 * JQuery
 * MetricsGraphics

To compile the library from sources, you will require the following dependencies:

 * Nodejs
 * Bower
 * Grunt

Install all Nodejs and Bower dependencies:

    npm install; bower install

Run `grunt` at the console to see the list of build commands.


Usage
-----

Create a chart with default data for testing:

    <chart></chart>

Bind the chart to the variable `data` in the controller scope. Provide
configuration options from the variable `options` in the controller scope:

    <chart data="{{ data }}" options="{{ options }}"></chart>


License
-------

Please see the LICENSE file for licensing and copyright information.
