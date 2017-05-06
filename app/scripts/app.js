'use strict';

/**
 * @ngdoc overview
 * @name conexoesApp
 * @description
 * # conexoesApp
 *
 * Main module of the application.
 */
angular
  .module('conexoesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCpfCnpj',
    'ui.mask',
    'restangular',
    'ngValid'
  ])
  .config(function ($routeProvider, $locationProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cadastro', {
        templateUrl: 'views/signup.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix('');

      RestangularProvider.setBaseUrl(
        'http://localhost:8000/');
  });
