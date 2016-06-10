
var Fitness = function(solution) {
    this.solution = solution || '';
};

Fitness.prototype = {
    constructor: Fitness,

    getFitness: function(individual) {
        var fitness = 0;
        for(var i = 0; i < this.solution.length; i++) {
            var geneChar = individual.gene.charAt(i);
            var solutionChar = this.solution.charAt(i);

            if(geneChar === solutionChar) {
                fitness++;
            }
        }

        return fitness;
        
    },

    getMaxFitness: function() {
        return this.solution.length;
    }

};

module.exports = Fitness;
