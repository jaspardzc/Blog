'use strict';

/**
 * @ngdoc function
 * @name Blog.service:HomeService
 * @description
 * # HomeService
 * Service of Blog Application
 */
var app = angular.module('Blog');

app.service('HomeService', ['$http', '$q', function($http, $q) {

	var uri = "app/src/data/overview.data.json";

	var deferred = $q.defer();

	this.getOverview = function() {

		$http.get(uri).then(
			function(response){
				deferred.resolve(response);
			}, 
			function(error){
				// handling error exception here
				deferred.reject(error);
			});

		return deferred.promise;
	};
}]);