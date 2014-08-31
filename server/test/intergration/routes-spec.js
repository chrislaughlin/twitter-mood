describe('Routes Testing', function() {
    var request = require('request');

    it("should respond with hello world", function(done) {
        request("http://localhost:3000/hello", function(error, response, body){
            expect(body).toEqual("Hello World");
            done();
        });
    });

    it('should respond with twitter status score', function(done) {
        request("http://localhost:3000/score/chrislaughlin", function(error, response, data){

            var twitterScore = JSON.parse(data);
            expect(twitterScore).toBeDefined();
            expect(twitterScore.total).toBeDefined();
            expect(twitterScore.totalSad).toBeDefined();
            expect(twitterScore.totalHappy).toBeDefined();
            expect(twitterScore.total).toEqual(100);
            expect(twitterScore.happyTweet).not.toEqual('');
            expect(twitterScore.sadTweet).not.toEqual('');
            done();
        });
    })
});
