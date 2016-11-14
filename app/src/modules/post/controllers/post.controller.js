/**
 * @ngdoc function
 * @name Blog.controller:postCtrl
 * @description
 * # postCtrl
 * Controller of Blog Application
 */
(function(app) {
'use strict';

	angular.module('Blog').controller('postCtrl', postCtrl);

	postCtrl.$inject = ['$scope', 'postService', '$state', '$localStorage'];

	function postCtrl($scope, postService, $state, $localStorage) {

		/** Scope Objects for Post Controller **/
		$scope.today = '';
		$scope.loading = false;

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

		$scope.posts = '';

		/** Watchers **/
		$scope.$watch('query.search', function(newVal, oldVal) {
			//console.log("Search Criteria: " + newVal);
		});

		$scope.$watch('query.timeline', function(newVal, oldVal) {
			//console.log("Timeline: " + newVal);
			$scope.switchPostTimeline(newVal);

		});
	 
		/** Functions for Post Controller **/
		$scope.init = function() {
			if ($localStorage.token === undefined || $localStorage.token === '') {
				$state.go('login');
			} else {
				$scope.setDate();
				
				postService.getPosts().then(function success(response) {
					$scope.posts = response.data;
					$scope.setDefaultPosts();

					$scope.loading = true;
				}, function error(response) {
					console.log(response);
				});
			}
		};

		$scope.setDate = function() {
			var today = new Date();

			var localDateString = today.toLocaleString();

			var localTimeString = today.toLocaleTimeString();

			$scope.today = localDateString + ' ';
		};

		$scope.setDefaultPosts = function() {
			if (angular.isDefined($scope.posts.currentView)) {
				$scope.posts.currentView = [];
				angular.forEach($scope.posts.allPosts, function(value, key) {
					if (value.latest === true && $scope.posts.currentView.indexOf(value) === -1) {
						$scope.posts.currentView.push(value);
					}
				});
			}
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
	};
})(window.app);
