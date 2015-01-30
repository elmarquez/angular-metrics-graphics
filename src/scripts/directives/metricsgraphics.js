/**
 * MetricsGraphics
 * This directive is based on tassekatt's Stackoverflow post
 * @see http://stackoverflow.com/questions/27252464/how-to-bind-graphicsmetrics-jquery-plugin-in-angular-app
 */
/* global data_graphic */
/* jshint camelcase:false, unused:false */
'use strict';

angular.module('metricsgraphics', []).directive('chart', function($http) {
  return {
    restrict: 'E',
    link: function(scope, element) {

      var success = function(result) {
        console.log('success');
        data_graphic({
          title: 'UFO Sightings',
          description: 'Yearly UFO sightings from 1945 to 2010.',
          data: result,
          markers: [{
            'year': 1964,
            'label': '"The Creeping Terror" released'
          }],
          width: 400,
          height: 250,
          target: element[0],
          x_accessor: 'year',
          y_accessor: 'sightings',
          interpolate: 'monotone'
        });
      };

      var error = function(err) {
        console.log(err);
      };

      $http.get('data/use_dates.csv').success(success).error(error);
    }
  };
});
