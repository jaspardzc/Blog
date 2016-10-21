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
        templateUrl: 'modules/auth/views/login.view.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/signup', {
        templateUrl: 'modules/auth/views/signup.view.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/home', {
        templateUrl: 'modules/home/views/home.view.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/profile', {
        templateUrl: 'modules/profile/views/profile.view.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/contact', {
        templateUrl: 'modules/social/views/contact.view.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/post', {
        templateUrl: 'modules/post/views/post.view.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);
