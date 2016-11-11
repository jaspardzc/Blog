/**
 * @ngdoc function
 * @name Blog.service:postService
 * @description
 * # postService
 * Service of Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').service('postService', postService);

	postService.$inject = ['$http', '$q'];

	function postService($http, $q) {

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
	};
})(window.app);