
var Individual = require('../src/individual');

var Reproduction = function() {
    this.mother = {};
    this.father = {};
};

Reproduction.prototype = {
    constructor: Reproduction,

    random: function(min, max) {
        return Math.floor(Math.random() * max) + min;
    },

    crossover: function(crossoverPoint) {
        crossoverPoint = crossoverPoint || this.random(2, this.mother.gene.length - 1);

        var genes = {
            AA: this.mother.gene.substring(0,crossoverPoint),
            AB: this.mother.gene.substring(crossoverPoint),
            BA: this.father.gene.substring(0, crossoverPoint),
            BB: this.father.gene.substring(crossoverPoint)
        };

        var children = [];

        var child = new Individual();
        child.setGene(genes.AA + genes.BB);
        children.push(child);

        child = new Individual();
        child.setGene(genes.BA + genes.AB);
        children.push(child);

        return children;
    },

    mutate: function(individual, position) {
        position = position || this.random(0, individual.gene.length - 1);
        var mutationChar = individual.getChars(1);

        var mutatedGene = individual.gene.substr(0, position)
            + mutationChar
            + individual.gene.substr(position + 1);

        individual.setGene(mutatedGene);

        return individual;
    }
};

module.exports = Reproduction;
