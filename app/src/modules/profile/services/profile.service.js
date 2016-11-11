/**
 * @ngdoc function
 * @name Blog.service:profileService
 * @description
 * # profileService
 * Service of Blog Application
 */
(function(app) {
'use strict';
	
	angular.module('Blog').service('profileService', profileService);

	profileService.$inject = ['$http', '$q'];

	function profileService($http, $q) {

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
	};
})(window.app);
