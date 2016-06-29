var Calculator = require('./calculator');

function ScientificCalculator () {}

ScientificCalculator.prototype = Object.create(Calculator.prototype);

ScientificCalculator.prototype.constructor = ScientificCalculator; // constructor should be self

ScientificCalculator.prototype.sin = function sin (a) {
    return Math.sin(a);
};
ScientificCalculator.prototype.cos = function cos (a) {
    return Math.cos(a);
};
ScientificCalculator.prototype.tan = function tan (a) {
    return Math.tan(a);
};
ScientificCalculator.prototype.log = function log (a) {
    return Math.log(a);
};
module.exports = ScientificCalculator;
