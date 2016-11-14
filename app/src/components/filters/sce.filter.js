/**
 * @ngdoc function
 * @name Blog.controller:sceFilter
 * @description
 * # sceFilter
 * Filter of the Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').filter('sceFilter', sceFilter);

	sceFilter.$inject = ['$sce'];

	function sceFilter($sce) {

		return function(data) {
			var newVal = $sce.trustAsResourceUrl(data);
			return newVal;
		};
	};
})(window.app);