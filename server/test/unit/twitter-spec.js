describe("Twitter Status Tests", function() {

    var twitter = require('../../src/twitter');

    it("should return hello world", function() {
        expect(twitter.hello()).toBe('Hello World');
    });

    it('should return results for \'Belfast\' search term', function(done) {
        twitter.search('Belfast', function(results) {
            expect(results).toBeDefined();
            done();
        });
    })
});
