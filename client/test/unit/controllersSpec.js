'use strict';

/* jasmine specs for controllers go here */

describe('Controllers: ', function () {

    var moodScope,
        moodController,
        resultsController,
        resultsScope,
        location;
    beforeEach(function () {
        module('twitterMood');
    });

    beforeEach(inject(function ($rootScope, $controller, $location) {
        moodScope = $rootScope.$new();
        resultsScope = $rootScope.$new();
        moodController = $controller('MoodCtrl', {
            '$scope': moodScope
        });
        resultsController = $controller('ResultsCtrl', {
            '$scope': resultsScope
        });
        location = $location;
    }));

    // Mood Controller
    it('should have Mood Controller', inject(function() {
        expect(moodController).toBeDefined();
    }));

    it('should default name and location to blank strings', function() {
        expect(moodScope.name).toEqual('');
        expect(moodScope.location).toEqual('');
    });

    it('should not change the location if the name is blank', function() {
        spyOn(location, 'path');
        moodScope.submit();
        expect(location.path).not.toHaveBeenCalled();
    });

    it('should change the location path when submitting', function() {
        spyOn(location, 'path');
        moodScope.name = 'test';
        moodScope.submit();
        expect(location.path).toHaveBeenCalledWith('results/test');
    });

    //Results Controller

    it('should have a Results Controller', inject(function() {
        expect(resultsController).toBeDefined();
    }));



});
