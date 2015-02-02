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
    scope: {
      data: '@',
      description: '@',
      height: '@',
      right: '@',
      title: '@',
      xAccessor: '@',
      yAccessor: '@'
    },
    link: function(scope, element) {
      var success = function(data) {
        var dim = {
          height: 200,
          right: 20,
          width: element[0].parentElement.clientWidth || 300
        };
        element[0].id = element[0].id ? element[0].id : Math.random().toString(36).substr(2, 5);
        data = MG.convert.date(data, 'date');
        //var fake_baselines = [{value: 160000000, label: 'a baseline'}];
        MG.data_graphic({
          title: scope.title,
          description: scope.description,
          data: data,
          width: dim.width || 300,
          height: scope.height || 200,
          right: dim.right || 0,
          //baselines: fake_baselines,
          target: '#' + element[0].id,
          x_accessor: scope.xAccessor,
          y_accessor: scope.yAccessor
        });
      };

      var error = function(err) {
        console.log(err);
      };

      $http.get('data/fake_users1.json').success(success).error(error);
    }
  };
});
