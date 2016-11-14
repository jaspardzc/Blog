/**
 * @ngdoc function
 * @name Blog.service:authFactory
 * @description
 * # authFactory
 * Factory of Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').factory('authFactory', authFactory);

	authFactory.$inject = ['$localStorage'];

	function authFactory($localStorage) {
		var authFactory = this;
		var tokenClaims = {};

		authFactory.urlBase64Decode = function(encoded) {
			var decoded = encoded.replace('-', '+').replace('_', '');
			switch (decoded.length%4) {
				case 0:
					break;
				case 2:
					decoded += '==';
					break;
				case 3:
					decoded += '=';
					break;
				default:
					throw 'Illegal Base64url String!';
			}
			return window.atob(decoded);
		};

		authFactory.setClaimsFromToken = function() {
			var token = $localStorage.token;
			var user = {};
			if (angular.isDefined(token)) {	
				// [0]: header
				// [1]: claims
				// [2]: signature
				var encoded = token.split('.')[1];
				user = JSON.parse(authFactory.urlBase64Decode(encoded));
			}
			tokenClaims = user;
		};

		authFactory.getClaimsFromToken = function() {
			authFactory.setClaimsFromToken();
			return tokenClaims;
		};

		authFactory.clearClaimsFromToken = function() {
			tokenClaims = {};
			delete $localStorage.token;
		};

		return authFactory; 
	};
})(window.app);