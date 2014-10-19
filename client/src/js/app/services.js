'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('twitterMood.services', []).service('GoogleMaps', [ '$http', '$q', function ($http, $q) {
    //http://maps.googleapis.com/maps/api/geocode/json?address=%22+belfast+%22&sensor=false
    var apiUri = 'http://maps.googleapis.com/maps/api/geocode/json?address=+'; //belfast+%22&sensor=false';

    return {
        /*
            Returns:
             "location" : {
                 "lat" : 54.59728500000001,
                 "lng" : -5.93012
             }
         */
        getLatLong: function(place) {
            var defer = $q.defer();
            $http.get(apiUri+place+'+%22&sensor=false').success(function(data) {
                if (data.status == 'OK') {
                    defer.resolve(data.results[0].geometry.location);
                } else {
                    defer.reject('ERROR');
                }
            }).error(function(err) {
                defer.reject(err);
            });
            return defer.promise;
        }
    }
}]);
