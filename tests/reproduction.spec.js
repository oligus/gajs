
var Reproduction = require('../src/reproduction');
var Individual = require('../src/individual');

describe('Reproduction', function() {

    var r;

    beforeEach(function() {
        r = new Reproduction();
    });
    
    describe('crossover', function() {
        it('should crossover at crossover point', function()  {
            i1 = new Individual('char', 10);
            i1.gene = 'abcdefghij';
            i2 = new Individual('char', 10);
            i2.gene = 'klmnopqrst';

            r.mother = i1;
            r.father = i2;

            var children = r.crossover(5);

            expect(children[0].gene).toEqual('abcdepqrst');
            expect(children[1].gene).toEqual('klmnofghij');
        });
    });

    it('should mutate', function() {
        i = new Individual('char', 10);
        i.gene = 'abcdefghij';
        var mi = r.mutate(i, 4);

        expect(mi.gene).toMatch(/abcd.fghi/);
    });
    
});