var Twit = require('twit');
var config = require('./config/config');
var T = new Twit({
    consumer_key:         'j7e73ODaTmBLCjTebVuLyQ'
    , consumer_secret:      'kUHs6yPcG2snHAx70tcJrzqgkU3jDwVzrmQ8AsLfvI'
    , access_token:         '1952367470-wId4DkQc10jexSuUgg73Xo29Fjo53yCtc3Mzzkf'
    , access_token_secret:  'vewT5P13RbW3JnLvLdnsgKYKEdWFNpW9xz9Iv85alJcvu'
});

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
}
