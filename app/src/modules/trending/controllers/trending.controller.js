/**
 * @ngdoc function
 * @name Blog.controller:trendingCtrl
 * @description
 * # trendingCtrl
 * Controller of the Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').controller('trendingCtrl', trendingCtrl);

	trendingCtrl.$inject = ['$scope', '$rootScope', '$mdToast', '$timeout'];

	function trendingCtrl($scope, $rootScope, $mdToast, $timeout) {

		$scope.videos = [];
		$scope.init = function() {
			$scope.videos = ['//www.youtube.com/embed/9y_JM1cbC1E', 
				'//www.youtube.com/embed/jlwGcgFfcnU', 
				'//www.youtube.com/embed/Av2Umb6nELU', 
				'//www.youtube.com/embed/p74282nDMX8'];

		};

		/* Entry Point of Contact Controller */
		$scope.init();
	};
})(window.app);