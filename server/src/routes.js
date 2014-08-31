var twitter =  require('./twitter');
var moodProcessor = require('./textmood');

/*
 HTTP GET /hello
 returns the simple string 'Hello'
 */
exports.hello = function(req, res) {
    res.send('Hello World');
};

exports.getScore = function(req, res) {
    twitter.getUserTweets(req.params.username, function(results) {
        twitter.processTweets(results, function(processedResults) {
            res.json(processedResults);
        })
    })
};


