/**
 * @ngdoc function
 * @name Blog.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['$scope', '__config', 'homeService', '$state', '$localStorage'];

	function homeCtrl($scope, __config, homeService, $state, $localStorage) {

		$scope.app_name = __config.app_name;

		/** Scope Objects for Home Ctrl **/
		$scope.loading = false;
		$scope.today = '';
		$scope.imagePath = 'app/src/images/avatar-1.jpg';
		$scope.overview = '';

		/** Functions for Home Ctrl **/
		$scope.init = function() {

			if ($localStorage.token === undefined || $localStorage.token === '') {
				$state.go('login');
			} else {
				$scope.setDate();

				homeService.getOverview().then(function success(response) {
					$scope.overview = response.data;

					$scope.loading = true;
				}, function error(response) {
					console.log(response);
				});
			}
		};

		$scope.setDate = function() {
			var today = new Date();

			var localDateString = today.toLocaleString();

			var localTimeString = today.toLocaleTimeString();

			$scope.today = localDateString + ' ';
		};

		/* Function for ngClass */
		$scope.isActive = function(index) {
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

	};
})(window.app);