describe('E2E Status and mood testing', function() {

    var twitter =  require('../../src/twitter');
    var moodProcessor = require('../../src/textmood');

    it('should return a score for the tweets', function(done) {
        twitter.getUserTweets('chrislaughlin', function(results) {
            expect(results).toBeDefined();
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
            expect(score).not.toEqual(0);
            done();
        })
    })
});
