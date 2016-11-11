/**
 * @ngdoc function
 * @name Blog.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the Blog Application
 */
(function() {
'use strict';

	var app = angular.module('Blog');

	app.controller('ContactCtrl', ['$scope', '$rootScope', '$mdToast', '$timeout', function ($scope, $rootScope, $mdToast, $timeout) {

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

		$scope.errorMessage = '';
		$scope.isEmailValid = true;

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

		$scope.$watch('contact.fromAddress', function(newVal, oldVal) {
			var regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (newVal !== oldVal) {
				if (!regex.test(newVal)) {
					$scope.isEmailValid = false;
				} else {
					$scope.isEmailValid = true;
				}
	 		}
		});

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

				$scope.errorMessage = 'Please fill in the required fields in the contact form!!';

				if (input.selectedType === undefined || input.selectedType === '') {
					$scope.errorMessage = 'Please choose one TYPE in the contact form!!';
				}

				return false;
			} else {
				return true;
			}
		};

		$scope.isInputValid = function(error, input) {
			if (angular.isDefined(error.required) && input.$dirty) {
				return error.required === true;
			} else {
				return false;
			}
		};

		$scope.submit = function(contact) {
			if ($scope.isValid(contact)) {

				console.log("Email Sent");

				$scope.alert.valid = true;

				$timeout(function() {
					$scope.alert.valid = false;
				}, 2000);

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

				$mdToast.show(
					$mdToast.simple()
							.textContent($scope.errorMessage)
							.action('Close')
							.capsule(true)
							.hideDelay(3000)
							.highlightAction(true)
							.position('bottom right')
				);		
			}
		};

		/* Entry Point of Contact Controller */
		$scope.init();
	}]);
})();

