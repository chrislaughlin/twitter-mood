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
        var score = 0;
        var negCount = 0;
        var posCount = 0;
        for (var i = 0, len = results.length; i < len; i++) {
            var statusScore = moodProcessor.processText(results[i].text);
            score += statusScore;
            if (statusScore < 0) {
                negCount++;
            } else {
                posCount++
            }
        }
        res.json({
            total: score,
            totalNegative: negCount,
            totalPositive: posCount,
            totalTweetCount: results.length
        });
    })
};


