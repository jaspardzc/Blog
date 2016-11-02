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
    'ui.router',
    'ui.sortable',
    'LocalStorageModule'
]);

mainApp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

      var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'modules/auth/views/login.view.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      }; 

      var signupState = {
        name: 'signup',
        url: '/signup',
        templateUrl: 'modules/auth/views/signup.view.html',
        controller: 'SignupCtrl',
        controllerAs: 'vm'
      }; 

      var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'modules/home/views/home.view.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      };

      var profileState = {
        name: 'profile',
        url: '/profile',
        templateUrl: 'modules/profile/views/profile.view.html',
        controller: 'ProfileCtrl',
        controllerAs: 'vm'
      };

      var concatState = {
        name: 'contact',
        url: '/contact',
        templateUrl: 'modules/social/views/contact.view.html',
        controller: 'ContactCtrl',
        controllerAs: 'vm'
      };

      var postState = {
        name: 'post',
        url: '/post',
        templateUrl: 'modules/post/views/post.view.html',
        controller: 'PostCtrl',
        controllerAs: 'vm'
      };

      $urlRouterProvider.otherwise('/login');

      $stateProvider.state(loginState);
      $stateProvider.state(signupState);
      $stateProvider.state(homeState);
      $stateProvider.state(profileState);
      $stateProvider.state(concatState);
      $stateProvider.state(postState);
}]);
