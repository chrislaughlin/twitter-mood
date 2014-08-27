var sentiment = require('sentiment');

/*
process text and return the score
 */
exports.processText = function(text) {
    return sentiment(text).score;
};


