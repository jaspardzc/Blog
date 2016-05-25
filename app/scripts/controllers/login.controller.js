'use strict';

/**
 * @ngdoc function
 * @name Blog.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the Blog Application
 */
var app = angular.module('Blog');

app.controller('LoginCtrl', ['$scope', '$rootScope', '$mdToast', '$timeout', '$location', '$cookies',
					function ($scope, $rootScope, $mdToast, $timeout, $location, $cookies) {

	$scope.init = function() {

	};

	$scope.signinAsAdmin = function(admin) {
		console.log(admin);
		$cookies.put(1, admin.email);
		$cookies.put(2, admin.password);
		$cookies.put(3, admin.rememberMe);

		if(typeof(Storage) !== "undefined") {
			localStorage.setItem("lastname", "Smith");
			console.log(localStorage.getItem("lastname"));
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
