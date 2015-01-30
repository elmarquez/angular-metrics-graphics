/**
 * MetricsGraphics
 * This directive is based on tassekatt's Stackoverflow post
 * @see http://stackoverflow.com/questions/27252464/how-to-bind-graphicsmetrics-jquery-plugin-in-angular-app
 */
/* global MG */
/* jshint camelcase:false, unused:false */
'use strict';

angular.module('metricsgraphics').directive('chart', function($http) {
  return {
    restrict: 'E',
    link: function(scope, element) {

      var success = function(data) {
        var torso = {};
        torso.width = 375;
        torso.height = 200;
        torso.right = 20;
        data = MG.convert.date(data, 'date');
        var fake_baselines = [{value: 160000000, label: 'a baseline'}];
        MG.data_graphic({
          title: 'Line Chart',
          description: 'This is a simple line chart. You can remove the area portion by adding <i>area: false</i> to the arguments list.',
          data: data,
          width: torso.width,
          height: torso.height,
          right: torso.right,
          baselines: fake_baselines,
          target: element[0],
          x_accessor: 'date',
          y_accessor: 'value'
        });
      };

      var error = function(err) {
        console.log(err);
      };

      $http.get('data/fake_users1.json').success(success).error(error);
    }
  };
});
