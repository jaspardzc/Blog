'use strict';

/**
 * @ngdoc function
 * @name Blog.service:ProfileService
 * @description
 * # ProfileService
 * Service of Blog Application
 */
var app = angular.module('Blog');

app.service('ProfileService', ['$http', '$q', function($http, $q) {

	var uri = "app/src/data/profile.data.json";

	var deferred = $q.defer();

	this.getProfile = function() {

		$http.get(uri).then(
			function(response){
				deferred.resolve(response);
			}, 
			function(error){
				// handling error exception here
				console.log(error);
				deferred.reject(error);
			});

		return deferred.promise;
	};
}]);