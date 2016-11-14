// register the http interceptor as a service
(function(app) {
'use strict'
	
	function httpInterceptor($httpProvider) {
		$httpProvider.interceptors.push(['$q', '$localStorage', function ($q, $localStorage) {
		   return {
		       'request': function (config) {
		           config.headers = config.headers || {};
		           if ($localStorage.token) {
		               config.headers.Authorization = 'Bearer ' + $localStorage.token;
		           }
		           return config;
		       },
		       'responseError': function (response) {
		           if (response.status === 401 || response.status === 403) {
		               $state.go('login');
		           }
		           return $q.reject(response);
		       }
		   };
		}]);
	}

	httpInterceptor.$inject = ['$httpProvider'];

	angular.module('Blog').config(httpInterceptor);

})(window.app);