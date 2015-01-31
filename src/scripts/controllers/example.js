/**
 * Example controller.
 */
'use strict';

angular
  .module('metricsgraphics')
  .controller('ExampleCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {

    $scope.STATES = {
      READY: 0,
      LOADING: 1
    };

    $scope.alert = null;
    $scope.chart = {
      data: null,
      title: 'Test Title',
      description: 'A test description',
      xAccessor: 'date',
      yAccessor: 'value'
    };
    $scope.state = $scope.STATES.READY;

    //-------------------------------------------------------------------------

    /**
     * Initialize the controller
     */
    $scope.init = function () {
      $scope.read();
    };

    /**
     * Read data.
     */
    $scope.read = function () {
      $scope.alert = null;
      $scope.state = $scope.STATES.LOADING;
      $http
        .get('data/fake_users1.json')
        .success(function(data) {
          $scope.chart.data = data;
          $scope.state = $scope.STATES.READY;
        })
        .error(function(err) {
          $scope.alert = {};
          $scope.chart.data = null;
          $scope.state = $scope.STATES.READY;
          $log.error(err);
        });
    };

    // initialize the controller
    $scope.init();

  }
]);