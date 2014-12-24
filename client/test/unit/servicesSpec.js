'use strict';

describe('Services', function () {

    beforeEach(module('twitterMood.services'));
    beforeEach(module('twitterMood.factories'));

    describe('Graph Data Service: ', function () {

        it('Set User results data', inject(function (GraphData) {
            var data = example;
            GraphData.storeUserData('username', data);
            var userData = GraphData.getUserData('username');
            expect(userData.getHappyTweets()).toEqual(data.posTweets);
            expect(userData.getSadTweets()).toEqual(data.negTweets);
        }));

    });
});
