'use strict';

describe('Services', function () {

    beforeEach(module('twitterMood.services'));
    beforeEach(module('twitterMood.factories'));

    xdescribe('Graph Data Service: ', function () {

        var graphData;
        beforeEach(inject(function(GraphData) {
            graphData = GraphData;
        }));

        it('Set User results data', function () {
            var data = example;
            graphData.storeUserData('username', data);
            var userData = graphData.getUserData('username');
            expect(userData.getHappyTweets()).toEqual(data.posTweets);
            expect(userData.getSadTweets()).toEqual(data.negTweets);
        });

        it('should process happy and sad tweets into graph data', function() {
            var happyTweets = [
                {
                    day: 'Monday',
                    text: 'monday text'
                },
                {
                    day: 'Friday',
                    text: 'Friday text'
                },
                {
                    day: 'Monday',
                    text: 'monday second text'
                }
            ];
            var sadTweets = [
                {
                    day: 'Tuesday',
                    text: 'tuesday text'
                },
                {
                    day: 'Thursday',
                    text: 'thursday text'
                },
                {
                    day: 'Monday',
                    text: 'monday text'
                }
            ];
            var expectedGraphData = [
                {
                    x: 'Monday',
                    y: [2, 0]
                },
                {
                    x: 'Tuesday',
                    y: [2, 0]
                },
                {
                    x: 'Wednesday',
                    y: [2, 0]
                },
                {
                    x: 'Thursday',
                    y: [2, 0]
                },
                {
                    x: 'Friday',
                    y: [2, 0]
                },
                {
                    x: 'Saturday',
                    y: [2, 0]
                },
                {
                    x: 'Sunday',
                    y: [2, 0]
                }
            ]
        })

    });
});
