'use strict';
/**
 * @ngdoc overview
 * @name Blog
 * @description
 * # Blog
 *
 * Main module of the application.
 */
var mainApp = angular.module('Blog', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
]);

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.view.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
        templateUrl: 'views/home.view.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/profile', {
        templateUrl: 'views/profile.view.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/contact', {
        templateUrl: 'views/contact.view.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/post', {
        templateUrl: 'views/post.view.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      .when('/signup', {
        templateUrl: 'views/signup.view.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl: 'views/login.view.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
