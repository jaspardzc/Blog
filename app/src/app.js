'use strict';
/**
 * @ngdoc overview
 * @name Blog
 * @description
 * # Blog
 *
 * Main module of the application.
 */

// local varialbles initialization
var env = {};
var config = {};

// import environment variables if present (from /config/env.config.js)
// import app config variables if present (from /config/app.config.js)
if (window) {
  Object.assign(env, window.__env);
  Object.assign(config, window.__config);
} 

// define AngularJS application
var app = angular.module('Blog', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngAria',
    'ngMaterial',
    'ngMessages',
    'ui.router',
    'LocalStorageModule'
]);

// register environment in AngularJS as constants
app.constant('__env', env)
    .constant('__config', config);

//
function disableLogging($logProvider, __env) {
  $logProvider.debugEnabled(__env.enableDebug);
}

// inject dependencies
disableLogging.$inject = ['$logProvider', '__env'];

// config logging capability
app.config(disableLogging);

// bootstrap angular routing configuration based on state routing
app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

      var loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'app/src/modules/auth/views/login.view.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      }; 

      var signupState = {
        name: 'signup',
        url: '/signup',
        templateUrl: 'app/src/modules/auth/views/signup.view.html',
        controller: 'SignupCtrl',
        controllerAs: 'vm'
      }; 

      var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'app/src/modules/home/views/home.view.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      };

      var profileState = {
        name: 'profile',
        url: '/profile',
        templateUrl: 'app/src/modules/profile/views/profile.view.html',
        controller: 'ProfileCtrl',
        controllerAs: 'vm'
      };

      var concatState = {
        name: 'contact',
        url: '/contact',
        templateUrl: 'app/src/modules/social/views/contact.view.html',
        controller: 'ContactCtrl',
        controllerAs: 'vm'
      };

      var postState = {
        name: 'post',
        url: '/post',
        templateUrl: 'app/src/modules/post/views/post.view.html',
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
