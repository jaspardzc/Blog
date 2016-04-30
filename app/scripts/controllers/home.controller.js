'use strict';

/**
 * @ngdoc function
 * @name myBlog.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the Blog Application
 */
var app = angular.module('Blog');

app.controller('HomeCtrl', ['$scope', function ($scope) {

	/** Scope Objects for Home Ctrl **/
	$scope.today = '';
	$scope.overview = {
		summary: {
			title: 'Summary',
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
					email: 'kevinzengdev@gmail',
					timespan: 'From April 2016 - Present'
				}
			},
			{
				title: 'Project - Online Reservation System',
				objective: '',
				details: [
					{

					},
					{

					}
				],
				environment: '',
				links: {
					github: 'https://github.com/jaspardzc/OnlineReservationSystem',
					demo: 'http://jaspardzc.github.io/onlinereservation/#/home'
				},
				caption: {
					email: 'kevinzengdev@gmail',
					timespan: 'From March 2015 - April 2016'
				}
			},
			{
				title: 'Project - Android Gourmet Guider',
				objective: '',
				details: [
					{

					},
					{

					}
				],
				environment: '',
				links: {
					github: 'https://github.com/jaspardzc/AndroidGourmetGuider',
					demo: 'http://jaspardzc.github.io/androidgourmetguider/#/home'
				},
				caption: {
					email: 'kevinzengdev@gmail',
					timespan: 'From December 2014 - May 2015'
				}
			},
			{
				title: 'Project - Circuit Analyzer and Verilog Generator',
				objective: '',
				details: [
					{

					},
					{

					}
				],
				environment: '',
				links: {
					github: 'https://github.com/jaspardzc/CircuitAnalyzer',
					demo: 'http://jaspardzc.github.io/circuitanalyzer/#/home'
				},
				caption: {
					email: 'kevinzengdev@gmail',
					timespan: 'From April 2014 - December 2014'
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
		console.log(index);
		return index === 0;
	};

	/**  Entry Point for Home Ctrl **/
	$scope.init();

}]);
