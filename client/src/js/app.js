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
  $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'MoodCtrl'});
  $routeProvider.when('/results/:username', {templateUrl: 'partials/results.html', controller: 'ResultsCtrl'});
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
