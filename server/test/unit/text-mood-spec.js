describe('Text Mood', function() {

    var textMoodProcessor = require('../../src/textmood');

    it('should return a score for a sad text', function(done) {
        expect(textMoodProcessor.processText('Cats are stupid.')).toEqual(-2);
        done();
    });

    it('should return a score for a happy text', function(done) {
        expect(textMoodProcessor.processText('Cats are totally amazing!')).toEqual(4);
        done();
    });

})
