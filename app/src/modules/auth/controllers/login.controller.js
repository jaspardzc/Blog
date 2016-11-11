/**
 * @ngdoc function
 * @name Blog.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the Blog Application
 */
(function() {
'use strict';

	var app = angular.module('Blog');

	app.controller('LoginCtrl', ['$scope', '$rootScope', '$mdToast', '$timeout', '$location', '$cookies',
						function ($scope, $rootScope, $mdToast, $timeout, $location, $cookies) {

		$rootScope.admin = {
			isAuthorized: false,
			email: '',
			password: '',
			timeStamp: ''
		};

		$scope.init = function() {
			$cookies.put("adminEmail", "kevinzengdev@gmail");
			$cookies.put("adminPassword", "123456789");

			if (angular.equals(localStorage.getItem("admin.isAuthorized"), true)) {
				// assign the value from localStorage to $rootScope.admin object
			}

			if (angular.equals($rootScope.admin.isAuthorized, true)) {
				$location.path('/home');
			}
		};

		$scope.signinAsAdmin = function(admin) {

			//$cookies.put("remember", admin.rememberMe);
			if(angular.equals($cookies.get("adminEmail"), admin.email) &&
			   angular.equals($cookies.get("adminPassword"), admin.password)) {
				$rootScope.admin.isAuthorized = true;
				$rootScope.admin.email = admin.password;
				$rootScope.admin.password = admin.password;
				$rootScope.admin.timeStamp = new Date();
				$rootScope.admin.timeStamp = $rootScope.admin.timeStamp.toLocaleString();
			} else {
				$rootScope.admin.isAuthorized = false;
			}

			if(typeof(Storage) !== "undefined") {
				localStorage.setItem("admin.isAuthorized", $rootScope.admin.isAuthorized);
				localStorage.setItem("admin.email", $rootScope.admin.email);
				localStorage.setItem("admin.password", $rootScope.admin.password);
				localStorage.setItem("admin.timeStamp", $rootScope.admin.timeStamp);
				localStorage.setItem("admin.rememberMe", admin.rememberMe);
			} else {
				alert("Your Browser does not support HTML5 LocalStorage!");
			}
		};

		$scope.signinAsGuest = function() {
			console.log("Signin as Guest Successfully!!");
			$location.path('/home');
		};


		/* Entry Point of Contact Controller */
		$scope.init();
	}]);
})();
