'use strict';

/**
 * @ngdoc function
 * @name Blog.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the Blog Application
 */
var app = angular.module('Blog');

app.controller('ContactCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

	$scope.contact = {
		fromAddress: '',
		toAddress: '',
		subject: '',
		content: '',
		type: []
	};

	$scope.alert = {
		valid: false,
		success: {
			valid: false
		},
		failure: {
			valid: false
		}
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
			input.selectedType === undefined ||
			input.selectedType === '') {
			return false;
		} else {
			return true;
		}
	};

	$scope.submit = function(contact) {
		if ($scope.isValid(contact)) {
			// call the REST Service
			console.log("Email Sent");

			$scope.alert.valid = true;

			var button = $('#submitButton');

			button.addClass('disabled');
			button.attr("disabled", "disabled");

		   	emailjs.send("gmail","template_JWiX1XYz",
		   					{
		   						"to_name": "Kevin", 
		   						"from_name": contact.fromAddress, 
		   						"subject": contact.subject,
		   						"type": contact.selectedType,
		   						"message_html": contact.content
		   					}
		   				)
					   	.then(function(response) {
					   		console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
					   		$scope.alert.success.valid = true;
					   		button.removeClass('disabled');
					   		button.removeAttr('disabled');
					   	}, function(error) {
					   		console.log("FAILED, error=", error);
					   		$scope.alert.failure.valid = true;
					   		button.removeClass('disabled');
					   		button.removeAttr('disabled');
					   	});
		} else {
			console.log("input is not valid!");
		}
	};

	/* Entry Point of Contact Controller */
	$scope.init();
}]);
