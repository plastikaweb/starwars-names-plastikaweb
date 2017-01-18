var expect = require('chai').expect,
    starWars = require('./index');

describe('starwars-names-plastikaweb', function () {

    describe('all', function () {
        it('should be an array of strings', function () {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(arr) {
                return arr.every(function (item) {
                    return typeof item === 'string';
                })
            }
        });

        it('should contain `Luke Skywalker`', function () {
            expect(starWars.all).to.include('Luke Skywalker');
        });

    });

    describe('random', function () {
        it('should return a random item for the starWars.all', function () {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
    });
});