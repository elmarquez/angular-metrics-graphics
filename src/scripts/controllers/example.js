/**
 * Example controller.
 */
'use strict';

angular
  .module('example')
  .controller('ExampleCtrl', ['$http', '$log', '$scope', function($http, $log, $scope) {

    $scope.STATES = {
      READY: 0,
      LOADING: 1
    };

    $scope.alert = null;
    $scope.data = [];
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
        .get('data/ufosightings.json')
        .success(function(data) {
          $scope.data = data;
          $scope.state = $scope.STATES.READY;
        })
        .error(function(err) {
          $scope.alert = {};
          $scope.data = [];
          $scope.state = $scope.STATES.READY;
          $log.error(err);
        });
    };

    // initialize the controller
    $scope.init();

  }
]);