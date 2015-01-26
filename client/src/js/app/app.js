'use strict';


// Declare app level module which depends on filters, and services
angular.module('twitterMood', [
    'ngRoute',
    'twitterMood.filters',
    'twitterMood.factories',
    'twitterMood.services',
    'twitterMood.directives',
    'twitterMood.controllers'
]).config(['$routeProvider', function ($routeProvider) {
    // Routes
    $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'MoodCtrl'});
    $routeProvider.when('/results/:username', {templateUrl: 'partials/results.html', controller: 'ResultsCtrl'});
    $routeProvider.when('/graphs/:username', {templateUrl: 'partials/graphs.html', controller: 'GraphsCtrl'});
    $routeProvider.otherwise({redirectTo: '/main'});
}]);
