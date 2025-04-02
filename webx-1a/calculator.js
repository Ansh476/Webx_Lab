var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    Calculator.subtract = function (a, b) {
        return a - b;
    };
    Calculator.multiply = function (a, b) {
        return a * b;
    };
    Calculator.divide = function (a, b) {
        if (b === 0) {
            return "Error: Division by zero is not allowed";
        }
        return a / b;
    };
    Calculator.calculate = function (operation, a, b) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                return "Error: Invalid operation";
        }
    };
    return Calculator;
}());
console.log(Calculator.calculate('add', 40, 21));
console.log(Calculator.calculate('subtract', 54, 41));
console.log(Calculator.calculate('multiply', 11, 7));
console.log(Calculator.calculate('divide', 20, 4));
console.log(Calculator.calculate('divide', 65, 0));
console.log(Calculator.calculate('modulus', 9, 4));
