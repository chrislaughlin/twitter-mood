'use strict';


// Declare app level module which depends on filters, and services
angular.module('twitterMood', [
  'ngRoute',
  'twitterMood.filters',
  'twitterMood.services',
  'twitterMood.directives',
  'twitterMood.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/score', {templateUrl: 'partials/score.html', controller: 'ScoreCtrl'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
  $routeProvider.otherwise({redirectTo: '/score'});
}]);
