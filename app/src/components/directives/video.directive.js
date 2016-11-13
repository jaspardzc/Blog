/**
 * @ngdoc function
 * @name Blog.controller:videoDirective
 * @description
 * # videoDirective
 * Directive of the Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').directive('videoDirective', videoDirective);

	function videoDirective() {

		// TODO, for Preview TechCrunch Videos
		// 
		// 
		var linker = function(scope, element, attrs) {

		};

		return {
			restrict: 'E',
			scope: {
				data: '=',

			},
			link: linker,
			templateUrl: 'app/src/components/templates/video.template.html'
		};

	};
})(window.app);