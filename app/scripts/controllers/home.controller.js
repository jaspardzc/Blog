'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the Blog Application
 */
var app = angular.module('Blog');

app.controller('HomeCtrl', ['$scope', function ($scope) {

	/** Scope Objects for Home Ctrl **/
	$scope.today = '';

	/** Functions for Home Ctrl **/
	$scope.init = function() {
		$scope.setDate();
	};

	$scope.setDate = function() {
		var today = new Date();

		var localDateString = today.toLocaleString();

		var localTimeString = today.toLocaleTimeString();

		$scope.today = localDateString + ' ';
	};

	$scope.isActive = function(home) {
		//return home === $scope.home;
	};

	/**  Entry Point for Home Ctrl **/
	$scope.init();

}]);
