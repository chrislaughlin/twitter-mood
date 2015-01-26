'use strict';

function UserData () {
    function UserData(username, happyTweets, sadTweets) {
        this.username = username;
        this.happyTweets = happyTweets;
        this.sadTweets = sadTweets;
    }
    UserData.getHappyTweets = function() {
        return this.happyTweets;
    };
    UserData.getSadTweets = function() {
        return this.sadTweets;
    };
    UserData.getTweetData = function() {
        return {

        }
    };
    return UserData;
}