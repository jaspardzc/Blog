'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of myBlog Application
 */
var app = angular.module('myBlog');

app.controller('PostCtrl', ['$scope', function ($scope) {

	$scope.posts = {
		all: [],
		favorite: [],
		deleted: []
	};



}]);
