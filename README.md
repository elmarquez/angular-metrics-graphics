Angular MetricsGraphics Directive
=================================

An Angular directive that encapsulates the Mozilla MetricsGraphics library,
providing easy configuration.

[![Build Status](https://travis-ci.org/elmarquez/angular-metrics-graphics.svg?branch=master)](https://travis-ci.org/elmarquez/angular-metrics-graphics)


Installation
------------

Use Bower to automatically install the library and its dependencies in your project:

    bower install -S angular-metrics-graphics

Alternately you may clone the project repository and use the compiled
dist/angular-metrics-graphics.js library file.


Dependencies
------------

The library has the following runtime dependencies:

 * Angular.js
 * JQuery
 * MetricsGraphics
 * d3.js

To compile the library from sources, you will require the following dependencies:

 * Nodejs
 * Bower
 * Grunt

Install all build and run time dependencies as follows:

    npm install; bower install

Run `grunt` at the console to see the list of build commands.


Usage
-----

In your HTML, add a reference to the angular-metrics-graphics library and
associated JavaScript and CSS dependencies:

    <link type="text/css" rel="stylesheet" href="path/to/metrics-graphics/dist/metricsgraphics.css" media="all">
    <script type="text/javascript" src="path/to/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="path/to/d3/d3.min.js"></script>
    <script type="text/javascript" src="path/to/angular/angular.min.js"></script>
    <script type="text/javascript" src="path/to/metricsgraphics/dist/metricsgraphics.js"></script>
    <script type="text/javascript" src="path/to/angular-metrics-graphics/dist/angular-metrics-graphics.js"></script>

Create a chart and set the data source as the `data` variable from the
controller scope. Set the configuration options from the variable `options`
in the controller scope:

    <chart data="{{ data }}" options="{{ options }}"></chart>


License
-------

Please see the LICENSE file for licensing and copyright information.
