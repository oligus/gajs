
var Fitness = require('../src/fitness');
var Individual = require('../src/individual');

describe('Fitness', function() {

    var f;

    beforeEach(function() {
        f = new Fitness('abcdefghij');
    });

    it('should get fitness score', function()  {
        i = new Individual('char', 10);
        i.setGene('abcdefghij');
        expect(f.getFitness(i)).toEqual(10);

        i.setGene('abxdefxhij');
        expect(f.getFitness(i)).toEqual(8);
    });

    it('should get max fitness', function()  {
        expect(f.getMaxFitness()).toEqual(10);
    });

});