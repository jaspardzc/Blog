/**
 * @ngdoc function
 * @name Blog.controller:imageDirective
 * @description
 * # imageDirective
 * Directive of the Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').directive('imageDirective', imageDirective);

	function imageDirective() {

		// TODO, for Preview and Download Facinating Photographs
		// 
		var linker = function(scope, element, attrs) {

		};

		return {
			restrict: 'E',
			scope: {
				data: '=',

			},
			link: linker,
			templateUrl: 'app/src/components/templates/image.template.html'
		};
	};
	
})(window.app);