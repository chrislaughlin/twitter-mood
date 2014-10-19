'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {

    var scope,
        controller,
        location;
    beforeEach(function () {
        module('twitterMood');
    });

    beforeEach(inject(function ($rootScope, $controller, $location) {
        scope = $rootScope.$new();
        controller = $controller('MoodCtrl', {
            '$scope': scope
        });
        location = $location;
    }));


    it('should have Mood Controller', inject(function() {
        //spec body
        expect(controller).toBeDefined();
    }));

    it('should default name and location to blank strings', function() {
        expect(scope.name).toEqual('');
        expect(scope.location).toEqual('');
    });

    it('should not change the location if the name is blank', function() {
        spyOn(location, 'path');
        scope.submit();
        expect(location.path).not.toHaveBeenCalled();
    });

    it('should change the location path when submitting', function() {
        spyOn(location, 'path');
        scope.name = 'test';
        scope.submit();
        expect(location.path).toHaveBeenCalledWith('results/test');
    });



});
