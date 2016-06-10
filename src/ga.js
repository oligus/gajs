
var Fitness = require('../src/fitness');
var Population = require('../src/population');

var fitness = new Fitness('1111000000000000000000000000000000000000000000000000000000001111');

var population = new Population(50, 'binary');
population.generate();

console.log(population);

