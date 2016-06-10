
var Individual = require('../src/individual');

var Population = function(size, type) {
    this.size = size || 100;
    this.type = type || 'char';

    this.individuals = [];
};

Population.prototype = {

    generate: function(size) {
        size = size || this.size;

        for(var i = 0; i < size; i++) {
            this.individuals[i] = new Individual(this.type);
        }
    },

    getSize: function() {
        return this.individuals.length;
    },

    addIndividual: function(individual) {
        this.individuals.push(individual);
    },

    getFittest: function(fitness) {
        var fittest = this.individuals[0];

        for(var i = 0; i < this.getSize(); i++) {
            var fitnessScore = fitness.getFitness(this.individuals[i]);

            if(fitnessScore > fitness.getFitness(fittest)) {
                fittest = this.individuals[i];
            }
        }

        return fittest;
    }
    
};

module.exports = Population;
