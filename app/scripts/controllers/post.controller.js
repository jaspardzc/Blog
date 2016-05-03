'use strict';

/**
 * @ngdoc function
 * @name Blog.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of Blog Application
 */
var app = angular.module('Blog');

app.controller('PostCtrl', ['$scope', 'PostService', function ($scope, PostService) {

	/** Scope Objects for Post Controller **/
	$scope.today = '';

	$scope.query = {
		search: '',
		timelines: [
			{
				"name": "Latest Posts",
				"date": new Date() + ''
			},
			{
				"name": "History Posts",
				"date": ''
			},
			{
				"name": "All Posts",
				"date": ''
			}
		]
	};

	$scope.posts = {
		category: [
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
		currentView: [],
		allPosts: [
			{
				"category": "Angular",
				"id": "kz-posts-angular-1",
				"title": "Angular: Difference between Controller, Factory and Service",
				"createdDate": "04/24/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"latest": true,
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
				"latest": true,
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
				"latest": true,
				"contentLink": "MongoDB: Data import and export with mongodump, import, export, etc" 
			},
			{
				"category": "OpenFire",
				"id": "kz-posts-openfire-1",
				"title": "OpenFire: Scalable XMPP Server with REST API",
				"createdDate": "04/23/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"latest": true,
				"contentLink": "OpenFire: Scalable XMPP Server with REST API"
			},
			{
				"category": "Angular",
				"id": "kz-posts-angular-2",
				"title": "Angular: Compare $http, $resource and Restangular",
				"createdDate": "03/22/2016",
				"author": "kevin zeng",
				"hightlighted": false,
				"readOnly": true,
				"searchAble": true,
				"latest": false,
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
				"latest": false,
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
				"latest": false,
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
				"latest": false,
				"contentLink": "OpenFire: Scalable XMPP Server with Smack API and Spark"
			}

		]
	};

	/** Watchers **/
	$scope.$watch('query.search', function(newVal, oldVal) {
		console.log("Search Criteria: " + newVal);
	});

	$scope.$watch('query.timeline', function(newVal, oldVal) {
		console.log("Timeline: " + newVal);
		$scope.switchPostTimeline(newVal);

	});
 
	/** Functions for Post Controller **/
	$scope.init = function() {
		$scope.setDate();
		$scope.setDefaultPosts();
		console.log($scope.posts);
	};

	$scope.setDate = function() {
		var today = new Date();

		var localDateString = today.toLocaleString();

		var localTimeString = today.toLocaleTimeString();

		$scope.today = localDateString + ' ';
	};

	$scope.setDefaultPosts = function() {
		$scope.posts.currentView = [];
		angular.forEach($scope.posts.allPosts, function(value, key) {
			if (value.latest === true && $scope.posts.currentView.indexOf(value) === -1) {
				$scope.posts.currentView.push(value);
			}
		});
	};

	$scope.setHistoryPosts = function() {
		$scope.posts.currentView = [];
		angular.forEach($scope.posts.allPosts, function(value, key) {
			if (value.latest !== true && $scope.posts.currentView.indexOf(value) === -1) {
				$scope.posts.currentView.push(value);
			}
		});
	};

	$scope.setAllPosts = function() {
		$scope.posts.currentView = [];
		$scope.posts.currentView = $scope.posts.allPosts;
	};

	$scope.switchPostTimeline = function(timeline) {
		switch(timeline) {
			case 'Latest Posts': $scope.setDefaultPosts();break;
			case 'History Posts': $scope.setHistoryPosts();break;
			case 'All Posts': $scope.setAllPosts();break;			
		}
	};

	$scope.doPostSearch = function() {
		console.log("Post Search: " + $scope.query.search);
		console.log("Timeline: " + $scope.query.timeline);
	};

	$scope.showCategory = function(category) {
		console.log("Switch to Category: " + category.type);
		$scope.posts.currentView = [];
		angular.forEach($scope.posts.allPosts, function(value, key) {
			if (value.category === category.type && $scope.posts.currentView.indexOf(value) === -1) {
				$scope.posts.currentView.push(value);
			}
		});		
	};

	/** Entry Point for Post Controller **/
	$scope.init();



}]);
