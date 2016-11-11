/**
 * @ngdoc function
 * @name Blog.service:PostService
 * @description
 * # PostService
 * Service of Blog Application
 */
(function() {
'use strict';

	var app = angular.module('Blog');

	app.service('PostService', ['$http', '$q', function($http, $q) {

		var uri = "app/src/data/post.data.json";

		var deferred = $q.defer();

		this.getPosts = function() {

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
})();