'use strict';

angular.module('twitterMood.factories', []).factory('UserData', function UserData() {
    function UserData(username, happyTweets, sadTweets) {
        this.username = username;
        this.happyTweets = happyTweets;
        this.sadTweets = sadTweets;
    }
    UserData.prototype.getHappyTweets = function() {
        return this.happyTweets;
    };
    UserData.prototype.getSadTweets = function() {
        return this.sadTweets;
    };

    return UserData;
});
