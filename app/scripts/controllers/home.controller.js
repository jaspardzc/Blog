'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the myBlog Application
 */
var app = angular.module('myBlog');

app.controller('HomeCtrl', ['$scope', function ($scope) {

  $scope.home = "true";

  console.log($scope.home);

  $scope.today = new Date() + '';

  $scope.isActive = function(home) {
    //return home === $scope.home;
  };


}]);
