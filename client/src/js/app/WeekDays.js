'use strict';

angular.module('twitterMood.factories', []).factory('WeekDays', function WeekDays() {
    return {
        MONDAY: 'Monday',
        TUESDAY: 'Tuesday',
        WEDNESDAY: 'Wednesday',
        THURSDAY: 'Thursday',
        FRIDAY: 'Friday',
        SATURDAY: 'Saturday',
        SUNDAY: 'Sunday'
    };
});

