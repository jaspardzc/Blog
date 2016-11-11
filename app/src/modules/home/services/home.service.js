/**
 * @ngdoc function
 * @name Blog.service:homeService
 * @description
 * # homeService
 * Service of Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').service('homeService', homeService);

	homeService.$inject = ['$http', '$q'];

	function homeService($http, $q) {

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
	};
})(window.app);