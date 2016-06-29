function Calculator() {}

Calculator.prototype.add = function add (a, b) {
    return a + b;
};
Calculator.prototype.subtract = function subtract (a, b) {
    return a - b;
};
Calculator.prototype.multiply = function multiply (a, b) {
    return a * b;
};
Calculator.prototype.divide = function divide (a, b) {
    if (b==0) return NaN;
    return a / b;
};

module.exports = Calculator;
