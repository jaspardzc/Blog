/**
 * @ngdoc function
 * @name Blog.controller:documentDirective
 * @description
 * # documentDirective
 * Directive of the Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').directive('documentDirective', documentDirective);

	function documentDirective() {

		var linker = function(scope, element, attrs) {
			scope.color = attrs.color;
			scope.marginLeft = attrs.marginLeft;
			scope.documentName = attrs.documentName;
		};

		return {
			restrict: 'E',
			scope: {
				data: '=',
			},
			link: linker,
			templateUrl: 'app/src/components/templates/document.template.html'
		};
	};
})(window.app);