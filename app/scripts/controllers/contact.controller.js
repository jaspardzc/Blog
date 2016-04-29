'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the myBlog Application
 */
var app = angular.module('myBlog');

app.controller('ContactCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

	$scope.contact = {
		fromAddress: '',
		toAddress: '',
		subject: '',
		content: '',
		type: []
	};

	/* Setter and Getters */
	$scope.setContact = function() {
		$scope.contact.toAddress = 'kevinzengdev@gmail.com';

		var array = [];
		array.push('NORMAL');
		array.push('URGENT');
		$scope.contact.type = array;
	};

	$scope.getContact = function() {
		return $scope.contact; 
	};

	/**** Functions for Contact Controller ****/
	$scope.init = function() {
		$scope.setContact();

	};

	$scope.isValid = function(input) {
		if (input === undefined ||
			input === '' ||
			input.fromAddress === undefined ||
			input.fromAddress === '' ||
			input.subject === undefined ||
			input.subject === '' ||
			input.content === undefined ||
			input.content === '' ||
			input.type === undefined ||
			input.type === '') {
			return false;
		} else {
			return true;
		}
	};

	$scope.submit = function(contact) {
		if ($scope.isValid(contact)) {
			// call the REST Service
			console.log("submitted");

			window.open('mailto:kevinzengdev@gmail.com');

			// clean the form and send a toast message to the UI
		} else {
			console.log("input is not valid!");
		}
	};

	/* Entry Point of Contact Controller */
	$scope.init();
}]);
