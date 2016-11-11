/**
 * @ngdoc function
 * @name Blog.controller:signupCtrl
 * @description
 * # signupCtrl
 * Controller of the Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').controller('signupCtrl', signupCtrl);

	signupCtrl.$inject = ['$scope', '$rootScope', '$mdToast', '$timeout'];

	function signupCtrl($scope, $rootScope, $mdToast, $timeout) {

		$scope.init = function() {

		};


		/* Entry Point of Contact Controller */
		$scope.init();
	};
})(window.app);