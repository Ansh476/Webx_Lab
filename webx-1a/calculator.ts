class Calculator {
	static add(a: number, b: number): number {
    	return a + b;
	}

	static subtract(a: number, b: number): number {
    	return a - b;
	}
 
	static multiply(a: number, b: number): number {
    	return a * b;
	}
 
	static divide(a: number, b: number): number | string {
    	if (b === 0) {
        	return "Error: Division by zero is not allowed";
    	}
    	return a / b;
	}

	static calculate(operation: string, a: number, b: number): number | string {
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
	}
}
console.log(Calculator.calculate('add', 40, 21)); 
console.log(Calculator.calculate('subtract', 54, 41)); 
console.log(Calculator.calculate('multiply', 11, 7)); 
console.log(Calculator.calculate('divide', 20, 4)); 
console.log(Calculator.calculate('divide', 65, 0)); 
console.log(Calculator.calculate('modulus', 9, 4)); 
