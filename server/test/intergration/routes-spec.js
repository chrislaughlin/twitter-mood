describe('Routes Testing', function() {
    var request = require('request');

    it("should respond with hello world", function(done) {
        request("http://localhost:3000/hello", function(error, response, body){
            expect(body).toEqual("Hello World");
            done();
        });
    });

    it('should respond with twitter status score', function(done) {
        request("http://localhost:3000/score/chrislaughlin", function(error, response, body){
            expect(body).toBeDefined();
            done();
        });
    })
})
