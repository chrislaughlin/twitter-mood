'use strict';

describe("Twitter Status Tests", function() {

    var twitter = require('../../src/twitter');
    var commonData = require('./common-data');

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

    it('should return the tweets from a user', function(done) {
        twitter.getUserTweets('chrislaughlin', function(results) {
            expect(results).toBeDefined();
            expect(results.length).toEqual(200);
            done();
        })
    });

    it('should process the returned tweets', function(done) {
        twitter.processTweets(commonData.sampleTweets(), function(results) {
            expect(results.total).toEqual(3);
            expect(results.totalHappy).toEqual(2);
            expect(results.totalSad).toEqual(1);
            expect(results.totalSad).toEqual(1);
            expect(results.happyTweet).toEqual('Cats are totally amazing!');
            expect(results.sadTweet).toEqual('Cats are stupid');
            done();
        })
    })
});
