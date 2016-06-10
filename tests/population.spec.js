
var Population = require('../src/population');
var Individual = require('../src/individual');
var Fitness = require('../src/fitness');

describe('Population', function() {

    var p;

    beforeEach(function() {
        p = new Population();
    });

    it('should get generate individuals', function()  {
        p.generate(10);
        expect(p.individuals.length).toEqual(10);
        expect(p.getSize()).toEqual(10);
    });

    it('should get fittest', function()  {
        pp = new Population(10);

        for(var i = 0;  i < 10; i++) {
            var gene = new Array(i + 2).join("1");
            gene = gene + new Array(10 -i).join("0");

            var individual = new Individual('binary', 10, gene);
            pp.addIndividual(individual);
        }

        var f = new Fitness('0011111100');

        var fittest = pp.getFittest(f);

        expect(fittest instanceof Individual).toBeTruthy();
        expect(fittest.gene).toEqual('1111111100');
        expect(f.getFitness(fittest)).toEqual(8);
    });

});