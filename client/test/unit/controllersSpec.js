'use strict';

/* jasmine specs for controllers go here */

describe('Controllers: ', function () {

    describe('Mood Controller', function () {
        var moodScope,
            moodController,
            location;

        beforeEach(function () {
            module('twitterMood');
        });

        beforeEach(inject(function ($rootScope, $controller, $location) {
            moodScope = $rootScope.$new();
            moodController = $controller('MoodCtrl', {
                '$scope': moodScope
            });
            location = $location;
        }));

        it('should have Mood Controller', inject(function () {
            expect(moodController).toBeDefined();
        }));

        it('should default name and location to blank strings', function () {
            expect(moodScope.name).toEqual('');
            expect(moodScope.location).toEqual('');
        });

        it('should not change the location if the name is blank', function () {
            spyOn(location, 'path');
            moodScope.submit();
            expect(location.path).not.toHaveBeenCalled();
        });

        it('should change the location path when submitting', function () {
            spyOn(location, 'path');
            moodScope.name = 'test';
            moodScope.submit();
            expect(location.path).toHaveBeenCalledWith('results/test');
        });

    });

    describe('Results Controller', function() {
        var resultsController,
            resultsScope,
            httpBackend;
        beforeEach(function () {
            module('twitterMood');
        });

        beforeEach(inject(function ($rootScope, $controller, $location, $httpBackend) {
            httpBackend = $httpBackend;
            httpBackend.when('GET', '/score/testUser').respond(example);
            httpBackend.expectGET('/score/testUser');
            resultsScope = $rootScope.$new();
            resultsController = $controller('ResultsCtrl', {
                '$scope': resultsScope,
                '$routeParams': {username: 'testUser'}
            });
            httpBackend.flush();
        }));

        it('should have a Results Controller', inject(function() {
            expect(resultsController).toBeDefined();
        }));

        it('should get the results for a user from the server', function() {
            var expectedResults = {
                username: 'testUser',
                mood:'happy',
                tweetCount: example.total,
                happyCount: example.totalHappy,
                sadCount: example.totalSad,
                happyTweet: example.happyTweet,
                sadTweet: example.sadTweet
            }
            expect(resultsScope.results).toEqual(expectedResults);
        });

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });
    });

});
