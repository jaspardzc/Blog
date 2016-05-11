'use strict';

/**
 * @ngdoc function
 * @name Blog.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the Blog Application
 */
var app = angular.module('Blog');

app.controller('HomeCtrl', ['$scope', function ($scope) {

	/** Scope Objects for Home Ctrl **/
	$scope.today = '';
	$scope.imagePath = 'images/avatar-1.jpg';
	$scope.overview = {
		summary: {
			title: 'About Me',
			description: ['Experienced in Highly Complex Web Application Development, \
						   proficient in Spring, Maven, Web Services and Front-end Technologies. \
						   Addicted to Agile Environment and Open Source Community.',
						   'Proficient with Responsive Web Design and Material Design'],
			footer: 'Code, Eat, Play, Sleep, Repeat'
		},
		projects: [
			{
				title: 'Project - Blog',
				objective: 'Blog is the my current personal website, contain profolio information, personal project brief, latest posts and more\
							, built and tested wth cutting edge front end technology.',
				details: [
					{
						description: 'Blog is Angular and Bootstrap Intensive, involved Modular Design and Material Design,\
									  implemented popular web app components such as autofill, carousel, mdTab, pagination, modal, etc.'
					},
					{
						description: 'Blog is maintained on Github Repository, deployed on the github.io using Github Pages, checkout at\
									  the Github Link & Demo Link'
					}
				],
				environment: 'Angular Web Application with Bootstrap, HTML, CSS, Material Design, Karma, Jasmine, etc',
				links: {
					github: 'https://github.com/jaspardzc/Blog',
					demo: 'http://jaspardzc.github.io/blog/#/home'
				},
				caption: {
					email: 'kevinzengdev@gmail'
				}
			},
			{
				title: 'Project - Online Reservation Platform',
				objective: 'Online Reservation Platform is inspired by Airbnb, in terms of shared economy, making usage of redundant and\
							spare space, fulfilling the pain point of temporary or periodically office place needs',
				details: [
					{
						description: 'Online Reservation Platform is based on Microservices Architecture and Modular Design, aiming at\
									  building an active community that enabling information sharing, social interacting, and more'
					},
					{
						description: 'Online Reservation Platform is maintained on Github Repository, deployed on the github.io using Github Pages, checkout at\
									  the Github Link & Demo Link'
					}
				],
				environment: 'Java, Spring, Spring Data, Spring JPA, MongoDB, Jersey, Jackson, Maven, Angular, Bootstrap, HTML, CSS\
							  XML, etc',
				links: {
					github: 'https://github.com/jaspardzc/OnlineReservationPlatform',
					demo: 'http://jaspardzc.github.io/onlinereservationplatform/#/home'
				},
				caption: {
					email: 'kevinzengdev@gmail'
				}
			},
			{
				title: 'Project - Android Gourmet Guider',
				objective: 'Android Gourmet Guider is inspired by Yelp, targeting at recognizing the images, analyzing the audio messages\
							finally providing a list of suggested dishes and the routes to the potential restaurants',
				details: [
					{
						description: 'Android Gourmet Guider is a Native Android Mobile App, heavily used OpenCV, Yelp API 2.0 and \
									  Google Map API, aiming at providing better Gourmet Experience based on user behavior'
					},
					{
						description: 'Android Gourmet Guider is maintained on Github Repository, avaialble in the Google Play Store, checkout at\
									  the Github Link & Demo Link'
					}
				],
				environment: 'Java, Android SDK, Gradle, OpenCV, Yelp API 2.0, Google Map API V2, XML, Android Studio, Bootstrap, JQuery, CSS, HTML, JavaScript',
				links: {
					github: 'https://github.com/jaspardzc/AndroidGourmetGuider',
					demo: 'http://jaspardzc.github.io/androidgourmetguider/#/home'
				},
				caption: {
					email: 'kevinzengdev@gmail'
				}
			},
			{
				title: 'Project - Circuit Analyzer and Verilog Generator',
				objective: 'Circuit Analyzer and Verilog Generator is designed to facilitating the digital circuit logic analyze',
				details: [
					{
						description: 'Circuit Analyzer and Verilog Generator is aiming at outstreaming smooth and reliable verilog code\
									  on analyzing the digital circuit logic units, involved Multiple Sheduling Algorithms Implementation'
					},
					{
						description: 'Circuit Analyzer and Verilog Generator is maintained on Github Repository, avaialble in the Google Play Store, checkout at\
									  the Github Link & Demo Link'
					}
				],
				environment: 'Java, HTML, CSS, Bootstrap, JQuery, Complex Algorithms, Hibernate, MySQL, Maven, XML',
				links: {
					github: 'https://github.com/jaspardzc/CircuitAnalyzer',
					demo: 'http://jaspardzc.github.io/circuitanalyzer/#/home'
				},
				caption: {
					email: 'kevinzengdev@gmail'
				}
			}
		]
	};

	/** Functions for Home Ctrl **/
	$scope.init = function() {
		$scope.setDate();
	};

	$scope.setDate = function() {
		var today = new Date();

		var localDateString = today.toLocaleString();

		var localTimeString = today.toLocaleTimeString();

		$scope.today = localDateString + ' ';
	};

	/* Function for ngClass */
	$scope.isActive = function(index) {
		//console.log(index);
		return index === 0;
	};

	$scope.demo = {
		showTooltip : false,
		tipDirection : ''
	};

	$scope.$watch('demo.tipDirection',function(val) {
		if (val && val.length ) {
		  $scope.demo.showTooltip = true;
		}
	});

	/**  Entry Point for Home Ctrl **/
	$scope.init();

}]);
