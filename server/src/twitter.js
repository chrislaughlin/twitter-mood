var Twit = require('twit');
var config = require('./config/config');
var moodProcessor = require('./textmood');
var T = new Twit({
    consumer_key:         'j7e73ODaTmBLCjTebVuLyQ'
    , consumer_secret:      'kUHs6yPcG2snHAx70tcJrzqgkU3jDwVzrmQ8AsLfvI'
    , access_token:         '1952367470-wId4DkQc10jexSuUgg73Xo29Fjo53yCtc3Mzzkf'
    , access_token_secret:  'vewT5P13RbW3JnLvLdnsgKYKEdWFNpW9xz9Iv85alJcvu'
});
var moment = require('moment');

/*
 Returns the simple string 'Hello'
 */
exports.hello = function() {
    return 'Hello World';
};

/*
 Searches for the last ten tweets containing the passed in query param
 */
exports.search = function(searchTerm, callBack) {
    //Check that a search has been sent in request query
    if (searchTerm != undefined) {
        T.get('search/tweets', { q: searchTerm, count: 10 }, function(err, reply) {
            if (err) {
                console.dir(err);
                callBack(undefined);
            } else {
                callBack(reply);
            }
        });
    } else {
        callBack(undefined);
    }
};

/*
Return the last 100 tweets from a user
 */
exports.getUserTweets = function(username, callBack) {
    T.get('statuses/user_timeline', {screen_name: username, count: 100}, function(err, reply) {
        if (err) {
            console.dir(err);
            callBack(err);
        } else {
            callBack(reply);
        }
    })
};

/*
Process tweet data in to happy/sad data
 */
exports.processTweets = function(tweets, callback) {
    var negCount = 0;
    var posCount = 0;
    var happyTweet = {
        score: 0,
        text: ''
    };
    var sadTweet = {
        score: 0,
        text: ''
    };
    var returnTweets = [];
    for (var i = 0, len = tweets.length; i < len; i++) {
        var statusScore = moodProcessor.processText(tweets[i].text);
        if (statusScore < 0) {
            negCount++;
            if (i == 0 || statusScore < sadTweet.score) {
                sadTweet = {
                    score: statusScore,
                    text: tweets[i].text
                }
            }
        } else {
            posCount++;
            if (i == 0 || statusScore >= happyTweet.score) {
                happyTweet = {
                    score: statusScore,
                    text: tweets[i].text
                }
            }
        }
        returnTweets.push({day: moment(tweets[i].created_at).format('dddd')});
    }
    callback({
        total: tweets.length,
        totalHappy: posCount,
        totalSad: negCount,
        happyTweet: happyTweet.text,
        sadTweet: sadTweet.text,
        tweets: returnTweets
    });
};
