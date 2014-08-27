describe("Twitter Status Tests", function() {

    var twitter = require('../../src/twitter');

    it("should return hello world", function() {
        expect(twitter.hello()).toBe('Hello World');
    });

    it('should return results for \'Belfast\' search term', function(done) {
        twitter.search('Belfast', function(results) {
            var tweets = results;
            expect(tweets).toBeDefined();
            expect(tweets.statuses.length).toBeGreaterThan(0); //All based on twitter :)
            done();
        });
    });

    it('should return undefined if the search term is not passed in', function(done) {
        twitter.search(undefined, function(results) {
            expect(results).toBeUndefined();
            done();
        });
    });

    it('should return the last 100 tweets from a user', function(done) {
        twitter.getUserTweets('chrislaughlin', function(results) {
            expect(results).toBeDefined();
            expect(results.length).toEqual(100);
            done();
        })
    })
});
