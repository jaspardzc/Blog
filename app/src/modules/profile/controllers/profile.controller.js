/**
 * @ngdoc function
 * @name Blog.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of Blog Application
 */
(function() {
'use strict';
	var app = angular.module('Blog');

	app.controller('ProfileCtrl', ['$scope', '$location',  'ProfileService', 
		function ($scope, $location, ProfileService) {


		$scope.profile = '';

		$scope.skills = '';
		$scope.experiences = '';
		$scope.basic = '';

		$scope.donut = '';
		$scope.product = {
			"selected": '',
			"list": [
						{
							"name": 'QNXT',
							"versions": [
								{
									"version": "5.0",
									"count": "12"
								},
								{
									"version": "4.0",
									"count": "6"
								},
								{
									"version": "3.0",
									"count": "4"
								},
								{
									"version": "2.0",
									"count": "2"
								}
							]
						},
						{
							"name": 'Facets',
							"versions": [
								{
									"version": "5.0",
									"count": "12"
								},
								{
									"version": "4.0",
									"count": "10"
								},
								{
									"version": "3.0",
									"count": "1"
								},
								{
									"version": "2.0",
									"count": "5"
								}
							]
						},
						{
							"name": 'CWS',
							"versions": [
								{
									"version": "5.0",
									"count": "5"
								},
								{
									"version": "4.0",
									"count": "10"
								},
								{
									"version": "3.0",
									"count": "4"
								},
								{
									"version": "2.0",
									"count": "10"
								}
							]
						}
					]
		};

		$scope.populateChartData = function(productSelected) {
			var array = [];

			angular.forEach(productSelected.versions, function(value, key) {
				var section = {label: "version: " + value.version, value: value.count};
				array.push(section);
			});

			return array;
		};

		$scope.selectProduct = function(index) {
			$scope.product.selected = $scope.product.list[index];
			var array = $scope.populateChartData($scope.product.selected);
			$scope.donut.setData(array);
		};

		$scope.init = function() {
			
			ProfileService.getProfile().then(function success(response) {
				$scope.profile = response.data;
				$scope.skills = $scope.profile.skills;
				$scope.experiences = $scope.profile.experience.professional;
				$scope.educations = $scope.profile.education;
				$scope.basic = $scope.profile.basic;
			}, function error(response) {
				console.log(response);
			});

			$scope.product.selected = $scope.product.list[0];

			var array = $scope.populateChartData($scope.product.selected);

			$scope.donut = new Morris.Donut({
						  element: 'myDonut',
						  data: array,
						  colors: ['#7BB661', '#7BB661', '#72A0C1', '#72A0C1'],
	  					  formatter: function (y) { 
	  					  	return "counts: " + y;
	  					  }
						});
			console.log($scope.donut);
		};

		/* Entry Point for Profile Controller */
		$scope.init();

	}]);
})();

