
var Individual = function(type, size, gene) {
    this.type = type || 'char';
    this.size = size || 64;
    this.gene = gene || '';

    this.types = {
        char : 'abcdefghijklmnopqrstuvwxyz',
        binary: '01'
    };

    if(this.gene.length < 1) {
        this.gene = this.generateGene();
        this.size = this.gene.length;
    }

};

Individual.prototype = {

    random: function(seed) {
        seed = seed || Math.random();
        var x = Math.sin(seed) * 10000;
        var rand = x - Math.floor(x);
        return Math.round(rand * (this.types[this.type].length - 1));
    },

    getChars : function(n) {
        n = n || 1;
        var chars = '';

        for(var i = 0; i < n; i++) {
            chars = chars + this.types[this.type].charAt(this.random());
        }

        return chars;
    },

    generateGene: function() {
        return this.getChars(this.size);
    },
    
    setGene: function(gene) {
        this.gene = gene;
        this.size = this.gene.length;
    }


};

module.exports = Individual;
