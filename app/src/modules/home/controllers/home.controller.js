'use strict';

/**
 * @ngdoc function
 * @name Blog.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the Blog Application
 */
var app = angular.module('Blog');

app.controller('HomeCtrl', ['$scope', '__config', 'HomeService', 
	function ($scope, __config, HomeService) {

	$scope.app_name = __config.app_name;

	/** Scope Objects for Home Ctrl **/
	$scope.today = '';
	$scope.imagePath = 'app/src/images/avatar-1.jpg';
	$scope.overview = '';

	/** Functions for Home Ctrl **/
	$scope.init = function() {
		$scope.setDate();

		HomeService.getOverview().then(function success(response) {
			$scope.overview = response.data;
		}, function error(response) {
			console.log(response);
		});
	};

	$scope.setDate = function() {
		var today = new Date();

		var localDateString = today.toLocaleString();

		var localTimeString = today.toLocaleTimeString();

		$scope.today = localDateString + ' ';
	};

	/* Function for ngClass */
	$scope.isActive = function(index) {
		//console.log(index);
		return index === 0;
	};

	$scope.demo = {
		showTooltip : false,
		tipDirection : '',
		selectedDirection: 'left'
	};

	$scope.$watch('demo.tipDirection',function(val) {
		if (val && val.length ) {
		  $scope.demo.showTooltip = true;
		}
	});

	/**  Entry Point for Home Ctrl **/
	$scope.init();

}]);
