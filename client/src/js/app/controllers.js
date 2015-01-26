'use strict';

/* Controllers */

angular.module('twitterMood.controllers', [])
    .controller('MoodCtrl', ['$scope', '$location', 'GoogleMaps', function ($scope, $location, GoogleMaps) {

        $scope.name = '';
        $scope.location = '';

        $scope.submit = function () {
            if ($scope.name == '') {
                alert('You must provide a username.');
                return;
            }
            $location.path('results/' + $scope.name);
        };

        $scope.submitLocation = function(location) {
            GoogleMaps.getLatLong($scope.location).then(function(data) {
                console.dir(data);
                console.dir(data);
            }, function(err) {
                console.dir(err);
            })
        }

    }])
    .controller('ResultsCtrl', ['$scope', '$routeParams', '$http', 'GraphData',
        function ($scope, $routeParams, $http, GraphData) {
            var username = $routeParams.username;
            $scope.results = {};
            $scope.loading = true;
            $http.get('/score/' + username).success(function (data) {
                $scope.results = {
                    username: username,
                    mood: data.totalHappy > data.totalSad ? 'happy' : 'sad',
                    tweetCount: data.total,
                    happyCount: data.totalHappy,
                    sadCount: data.totalSad,
                    happyTweet: data.happyTweet,
                    sadTweet: data.sadTweet
                };
                $scope.loading = false;
                GraphData.storeUserData(username, $scope.results);
            });
        }]).controller('GraphsCtrl', ['$scope', '$routeParams', 'GraphData', function($scope, $routeParams, GraphData) {
        var userData = GraphData.getUserData($routeParams.username);

    }]);
