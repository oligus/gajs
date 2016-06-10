
var Individual = require('../src/individual');

describe('individual', function() {

    var i;

    beforeEach(function() {
        i = new Individual();
    });

    it('should get random number', function()  {
        expect(i.random(1)).toEqual(18);
        expect(i.random(4)).toEqual(24);
        expect(i.random(23)).toEqual(20);
    });

    it('should get a random char', function() {
        expect(i.getChars(10).length).toEqual(10);
    });

    it('should get a random binary', function() {
        i.type = 'binary';
        expect(i.getChars(10).length).toEqual(10);
    });
    
    it('should generate a gene', function() {
        i.type = 'char';
        var gene = i.generateGene();
        expect(gene.length).toEqual(64);
    });

    it('should create an individual and generate gene', function() {
        var ind = new Individual();
        expect(ind.gene.length).toEqual(64);
    });
});