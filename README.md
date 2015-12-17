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

See the dependencies section of the bower.json file for the list of runtime
dependencies.

To compile the library from sources, you will require the following to be
available on your system:

 * Nodejs
 * Bower
 * Grunt

Install all dependencies as follows:

    npm install; bower install

Run `grunt` at the console to see the list of build commands. Run `grunt serve`
to start a local web server and view the examples.


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

If you have a date field that requires conversion into a Date object, use the
convert-date-field attribute as follows:

    <chart data="{{ data }}" options="{{ options }}" convert-date-field="{{ field name }}"></chart>

See the index.html page for examples.


License
-------

Please see the LICENSE file for licensing and copyright information.
