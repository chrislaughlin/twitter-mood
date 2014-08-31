'use strict';

/* Controllers */

angular.module('twitterMood.controllers', [])
    .controller('MoodCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.name = '';

        $scope.submit = function (name) {
            if ($scope.name == '') {
                alert('You must provide a username.');
                return;
            }
            $location.path('results/' + $scope.name);
        }

    }])
    .controller('ResultsCtrl', ['$scope', '$routeParams', '$http',
        function ($scope, $routeParams, $http) {

            $scope.results = {};
            $scope.loading = true;
            $http.get('/score/' + $routeParams.username).success(function (data) {
                $scope.results = {
                    username: $routeParams.username,
                    mood: data.totalHappy > data.totalSad ? 'happy' : 'sad',
                    tweetCount: data.total,
                    happyCount: data.totalHappy,
                    sadCount: data.totalSad,
                    happyTweet: data.happyTweet,
                    sadTweet: data.sadTweet
                };
                $scope.loading = false;
            });
        }]);
