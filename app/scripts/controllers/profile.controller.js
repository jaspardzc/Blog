'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of myBlog Application
 */
var app = angular.module('myBlog');

app.controller('ProfileCtrl', ['$scope', function ($scope) {


	$scope.profile = {
		basic: {
			name: '',
			occupation: '',
			email: '',
			linkedin: '',
			github: ''
		},
		education: {
			graduate: '',
			undergraduate: '',
			highschool: ''
		},
		experience: {
			current: '',
			previous: []
		},
		projects: {
			personal: [],
			others: []
		}
	};

}]);
