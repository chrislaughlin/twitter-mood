describe('E2E Status and mood testing', function() {

    var twitter =  require('../../src/twitter');
    var moodProcessor = require('../../src/textmood');

    it('should return a score for the tweets', function(done) {
        twitter.getUserTweets('chrislaughlin', function(results) {
            expect(results).toBeDefined();
            var score = 0;
            for (var i = 0, len = results.length; i < len; i++) {
                score += moodProcessor.processText(results[i].text);
                console.log(moodProcessor.processText(results[i].text));
            }
            console.log(score);
            expect(score).not.toEqual(0);
            done();
        })
    })
})
