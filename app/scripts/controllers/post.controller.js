'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of myBlog Application
 */
var app = angular.module('myBlog');

app.controller('PostCtrl', ['$scope', 'PostService', function ($scope, PostService) {

	/** Scope Objects for Post Controller **/
	$scope.today = '';

	$scope.query = {
		search: '',
		timeline: 'Latest Posts'
	};

	$scope.posts = {
		"category": [
			{
				"type": "Angular",
				"postCount": "2"
			},
			{
				"type": "Spring",
				"postCount": "2"
			},
						{
				"type": "MongoDB",
				"postCount": "2"
			},
			{
				"type": "OpenFire",
				"postCount": "2"
			}
		],
		"latestPosts": [
			{
				"category": "Angular",
				"id": "kz-posts-angular-1",
				"title": "Angular: Difference between Controller, Factory and Service",
				"createdDate": "04/24/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"contentLink": "Angular: Difference between Controller, Factory and Service" 
			},
			{
				"category": "Spring",
				"id": "kz-posts-spring-1",
				"title": "Spring: Bean Factory vs ApplicationContext Factory",
				"createdDate": "04/24/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"contentLink": "Spring: Bean Factory vs ApplicationContext Factory"
			},
			{
				"category": "MongoDB",
				"id": "kz-posts-mongodb-1",
				"title": "MongoDB: Data import and export with mongodump, import, export, etc",
				"createdDate": "04/24/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"contentLink": "MongoDB: Data import and export with mongodump, import, export, etc" 
			},
			{
				"category": "OpenFire",
				"id": "kz-posts-openfire-1",
				"title": "OpenFire: Scalable XMPP Server with REST API",
				"createdDate": "04/24/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"contentLink": "OpenFire: Scalable XMPP Server with REST API"
			}
		],
		"otherPosts": [
			{
				"category": "Angular",
				"id": "kz-posts-angular-2",
				"title": "Angular: Compare $http, $resource and Restangular",
				"createdDate": "03/24/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"contentLink": "Angular: Compare $http, $resource and Restangular" 
			},
			{
				"category": "Spring",
				"id": "kz-posts-spring-2",
				"title": "Spring: Dependency Injection with Setter and Constructor",
				"createdDate": "03/24/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"contentLink": "Spring: Dependency Injection with Setter and Constructor"
			},
			{
				"category": "MongoDB",
				"id": "kz-posts-mongodb-2",
				"title": "MongoDB: Data Denormalization vs Master Collection",
				"createdDate": "03/24/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"contentLink": "MongoDB: Data Denormalization vs Master Collection" 
			},
			{
				"category": "OpenFire",
				"id": "kz-posts-openfire-2",
				"title": "OpenFire: Scalable XMPP Server with Smack API and Spark",
				"createdDate": "03/24/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"contentLink": "OpenFire: Scalable XMPP Server with Smack API and Spark"
			}
		]
	};
 
	/** Functions for Post Controller **/
	$scope.init = function() {
		$scope.setDate();
		console.log($scope.posts);
	};

	$scope.setDate = function() {
		var today = new Date();

		var localDateString = today.toLocaleString();

		var localTimeString = today.toLocaleTimeString();

		$scope.today = localDateString + ' ';
	};

	$scope.doPostSearch = function() {
		console.log("Post Search: " + $scope.query.search);
		console.log("Timeline: " + $scope.query.timeline);
	};

	$scope.showCategory = function(category) {
		console.log("Switch to Category: " + category.type);
	};

	/** Entry Point for Post Controller **/
	$scope.init();



}]);
