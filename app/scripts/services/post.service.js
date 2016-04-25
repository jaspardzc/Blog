'use strict';

/**
 * @ngdoc function
 * @name myBlog.service:PostService
 * @description
 * # PostService
 * Service of myBlog Application
 */
var app = angular.module('myBlog');

app.service('PostService', ['$http', '$q', function($http, $q) {

	var uri = "data/post.data.json";

	this.getPosts = function() {

		console.log("triggered");

		$http.get(uri).then(
			function(response){
				console.log(response);
			}, 
			function(error){
				// handling error exception here
			});
	};



}]);