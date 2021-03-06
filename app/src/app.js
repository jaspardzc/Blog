/**
 * @ngdoc overview
 * @name Blog
 * @description
 * # Blog
 *
 * Main module of the application.
 */
(function(window, app) {
'use strict';

  // local varialbles initialization
  var env = {};
  var config = {};

  // import environment variables if present (from /config/env.config.js)
  // import app config variables if present (from /config/app.config.js)
  if (window) {
    Object.assign(env, window.__env);
    Object.assign(config, window.__config);
  } 

  // register third party javascript library as angular module
  angular.module('googlePlatformApi', [])
    .factory('gapi', function($window) {
      if ($window.gapi) {
        $window._thirdparty = $window._thirdparty || {};
        $window._thirdparty.gapi = $window.gapi;
        try {
          delete $window.gapi;
        } catch (e) {
          $window.gapi = undefined;
        }
      }
      var gapi = $window._thirdparty.gapi;
      return gapi;
    });

  // define AngularJS application
  app = angular.module('Blog', [
      'ngAnimate',
      'ngStorage',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngAria',
      'ngMaterial',
      'ngMessages',
      'ui.router',
      'oauth'
  ]);

  // register environment in AngularJS as constants
  app.constant('__env', env)
      .constant('__config', config);

  // bootstrap angular logging configration
  function disableLogging($logProvider, __env) {
    $logProvider.debugEnabled(__env.enableDebug);
  }

  // inject logging dependencies
  disableLogging.$inject = ['$logProvider', '__env'];

  // register with app global configuration
  app.config(disableLogging);

  // bootstrap angular routing configuration based on state routing
  function routingConfig($urlRouterProvider, $stateProvider) {

        var loginState = {
          name: 'login',
          url: '/login',
          views: {
            'default': {
              templateUrl: 'app/src/modules/auth/views/login.view.html',
              controller: 'authCtrl',
              controllerAs: 'vm'
            }
          }
        }; 

        var signupState = {
          name: 'signup',
          url: '/signup',
          views: {
            'default': {
              templateUrl: 'app/src/modules/auth/views/signup.view.html',
              controller: 'signupCtrl',
              controllerAs: 'vm'   
            }
          }
        }; 

        var homeState = {
          name: 'home',
          url: '/home',
          views: {
            'default': {
              templateUrl: 'app/src/modules/home/views/home.view.html',
              controller: 'homeCtrl',
              controllerAs: 'vm'
            }
          }
        };

        var profileState = {
          name: 'profile',
          url: '/profile',
          views: {
            'default': {
              templateUrl: 'app/src/modules/profile/views/profile.view.html',
              controller: 'profileCtrl',
              controllerAs: 'vm'
            }
          }
        };

        var concatState = {
          name: 'contact',
          url: '/contact',
          views: {
            'default': {
              templateUrl: 'app/src/modules/social/views/contact.view.html',
              controller: 'contactCtrl',
              controllerAs: 'vm'
            }
          }
        };

        var postState = {
          name: 'post',
          url: '/post',
          views: {
            'default': {
              templateUrl: 'app/src/modules/post/views/post.view.html',
              controller: 'postCtrl',
              controllerAs: 'vm'
            }
          }
        };

        var trendingState = {
          name: 'trending',
          url: '/trending',
          views: {
            'default': {
              templateUrl: 'app/src/modules/trending/views/trending.view.html',
              controller: 'trendingCtrl',
              controllerAs: 'vm'
            }
          }
        };

        $urlRouterProvider.otherwise('/login');

        $stateProvider.state(loginState);
        $stateProvider.state(signupState);
        $stateProvider.state(homeState);
        $stateProvider.state(profileState);
        $stateProvider.state(concatState);
        $stateProvider.state(postState);
        $stateProvider.state(trendingState);
  };

  // inject routing dependencies
  routingConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  // register with app global configuration
  app.config(routingConfig);


  // TODO, restangular configuration
  
})(window, window.app);
