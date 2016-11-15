/**
 * @ngdoc function
 * @name Blog.service:authService
 * @description
 * # authService
 * Service of Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').service('authService', authService);

	authService.$inject = ['$http', '$q', '$localStorage', 'authFactory'];

	function authService($http, $q, $localStorage, authFactory) {

		var uri = "app/src/data";

		this.login = function(data) {

			var deferred = $q.defer();

			$http.get(uri + '/credential.data.json').then(
				function(response){

					if (angular.equals(data.email, response.data.email)
						&& angular.equals(data.password, response.data.password)) {
						
						response.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjEzODY4OTkxMzEsImlzcyI6ImppcmE6MTU0ODk1OTUiLCJxc2giOiI4MDYzZmY0Y2ExZTQxZGY3YmM5MGM4YWI2ZDBmNjIwN2Q0OTFjZjZkYWQ3YzY2ZWE3OTdiNDYxNGI3MTkyMmU5IiwiaWF0IjoxMzg2ODk4OTUxfQ.uKqU9dTB6gKwG6jQCuXYAiMNdfNRw98Hw_IWuA5MaMo';
						$localStorage.token = response.token;
					}
					deferred.resolve(response);
				}, 
				function(error){
					// handling error exception here
					console.log(error);
					deferred.reject(error);
				});

			return deferred.promise;
		};

		this.logout = function() {
			authFactory.clearClaimsFromToken();
		};
	};
})(window.app);