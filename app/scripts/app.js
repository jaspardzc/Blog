'use strict';
/**
 * @ngdoc overview
 * @name myBlog
 * @description
 * # myBlog
 *
 * Main module of the application.
 */
var mainApp = angular.module('myBlog', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
]);

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.view.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
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
      .otherwise({
        redirectTo: '/'
      });
}]);
