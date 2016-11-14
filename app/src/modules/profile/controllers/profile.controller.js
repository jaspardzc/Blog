/**
 * @ngdoc function
 * @name Blog.controller:profileCtrl
 * @description
 * # profileCtrl
 * Controller of Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').controller('profileCtrl', profileCtrl);

	profileCtrl.$inject = ['$scope', '$location', 'profileService'];

	function profileCtrl($scope, $location, profileService) {

		$scope.loading = false;
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
			
			profileService.getProfile().then(function success(response) {
				$scope.profile = response.data;
				$scope.skills = $scope.profile.skills;
				$scope.experiences = $scope.profile.experience.professional;
				$scope.educations = $scope.profile.education;
				$scope.basic = $scope.profile.basic;

				$scope.loading = true;
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
		};

		/* Entry Point for Profile Controller */
		$scope.init();

	};
})(window.app);

