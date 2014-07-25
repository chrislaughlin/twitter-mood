'use strict';

/* Controllers */

angular.module('twitterMood.controllers', [])
  .controller('ScoreCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.username = '';

        $scope.getScore = function() {
            $http.get('/score/'+$scope.username).success(function(data) {
                alert(angular.fromJson(data));
            });
        }

  }])
  .controller('AboutCtrl', ['$scope', function($scope) {

  }]);
