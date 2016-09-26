'use strict';

/**
 * @ngdoc overview
 * @name angularJsYeomanApp
 * @description
 * # angularJsYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsYeomanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
