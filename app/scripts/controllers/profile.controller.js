'use strict';

/**
 * @ngdoc function
 * @name Blog.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of Blog Application
 */
var app = angular.module('Blog');

app.controller('ProfileCtrl', ['$scope', '$location',  function ($scope, $location) {


	$scope.profile = {
		basic: {
			name: 'Kevin Zeng',
			firstName: 'Kevin',
			lastName: 'Zeng',
			occupation: 'Full Stack Software Enginner',
			email: 'kevinzengdev@gmail',
			linkedinUrl: 'https://www.linkedin.com/in/kevin-zeng-38584a118',
			githubUrl: 'https://github.com/jaspardzc'
		},
		education: [
			{
				"degree": "Master of Science (M.S.), ECE",
				"name": "University of Arizona",
				"timespan": "2013 - 2015",
				"location": 'Tucson, Arizona Area'				
			},
			{
				"degree": "Bachelor of Engineering (B.E.), ECE",
				"name": "Hubei University",
				"timespan": "2009 - 2013",
				"location": 'Wuhan, Hubei Province, CN'				
			}
		],
		experience: {
			professional: [
				{
					"title": "Senior Software Engineer",
					"company": "Trizetto Corporation",
					"timespan": "November 2015 - Present",
					"location": "Phoenix, Arizona Area"					
				},
				{
					"title": "Software Engineer",
					"company": "Vensoft Inc",
					"timespan": "March 2015 - November 2015",
					"location": "Glendale, Arizona Area"					
				},
				{
					"title": "Software Engineer",
					"company": "The University of Arizona",
					"timespan": "October 2013 - March 2015",
					"location": "Tucson, Arizona Area"					
				},
				{
					"title": "Software Engineer",
					"company": "China Telecom Global",
					"timespan": "2011 - 2013",
					"location": "Wuhan, Hubei, China"					
				}
			],
			volunteer: []
		},
		skills: [
			{
				"title": "Front End",
				"description": "Proficient with Responsive Web Design and Latest Front End Technologies,\
				 extensive experiences with AngularJS,Bootstrap, JQuery, HTML, CSS, and Material Design, \
				 hands on experience with Front End Architecture Design and Refactoring",
				"startDate": "April 2012"
			},
			{
				"title": "Back End",
				"description": "Proficient with Microservices and Modularizing Application Development, hands on experiences with API\
								programming and management, familiar with Java, JEE, Spring, Hibernate, Maven, JDBC, experienced in\
								both Business Functionalities Development and Fundational Components Implementation",
				"startDate": "April 2011"
			},
			{
				"title": "Web Services",
				"description": "Proficient with RESTful Web Services and WebSockets, hands on experiences with Tomcat Deployment and\
								Docker Image Build, familiar with JAX-RS, Jersey, OpenFire, XMPP, HTTP, Docker, Tomcat",
				"startDate": "April 2012"
			}
		]
	};

	$scope.skills = '';
	$scope.experiences = '';
	$scope.basic = '';

	$scope.init = function() {
		console.log($scope.profile);
		$scope.skills = $scope.profile.skills;
		$scope.experiences = $scope.profile.experience.professional;
		$scope.educations = $scope.profile.education;
		$scope.basic = $scope.profile.basic;
	};

	/* Entry Point for Profile Controller */
	$scope.init();

}]);
