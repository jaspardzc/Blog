/**
 * @ngdoc function
 * @name Blog.controller:authCtrl
 * @description
 * # authCtrl
 * Controller of the Blog Application
 * Use $localStorage instead of $cookies
 */
(function(app) {
'use strict';

	angular.module('Blog').controller('authCtrl', authCtrl);

	authCtrl.$inject = ['$scope', '$rootScope', '$mdToast', '$timeout', '$state',
		'$localStorage', 'authService', 'authFactory'];

	function authCtrl($scope, $rootScope, $mdToast, $timeout, $state, $localStorage, authService, authFactory) {

		$scope.admin = {
			email: '',
			password: ''
		};

		$rootScope.authorized = false;

		$scope.init = function() {
			if ($localStorage.token !== '' && $localStorage.token !== undefined) {
				$rootScope.authorized = true;
				$state.go('home');
			} else {

				// OAuth Initialization
			}
		};

		var successAuthorized = function(response) {
			if (angular.isDefined(response.token)) {
				$rootScope.authorized = true;
				var decoded = authFactory.getClaimsFromToken();
				$localStorage.token = decoded.qsh;
				$state.go('home');
			} else {
				alert('Token is invalid, login failed!');
			}
		};

		$scope.signinAsAdmin = function(admin) {
			var credential = {
				email: $scope.admin.email,
				password: $scope.admin.password
			}

			authService.login(credential).then(function success(response) {
				successAuthorized(response);
			}, function error(response) {
				console.log(response);
			});
		};

		$scope.signinAsGuest = function() {
			$rootScope.authorized = true;
			// temporary guest token
			$localStorage.token = "eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhw";
			$state.go('home');
		};

		$scope.logout = function() {
			//singoutGoogleOAuth();
			authService.logout();
			$state.go('login');
		};

		$scope.token = $localStorage.token;

		/* Entry Point of Contact Controller */
		$scope.init();
	};
})(window.app);
