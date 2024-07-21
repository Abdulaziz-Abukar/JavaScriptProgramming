/*
Complex Object with Methods

Create an object named calculator with properties a and b, and methods add, subtract, multiply, and divide. Each method should perform the respective arithmetic operation on a and b and return the result. Test each method and log the results to the console.

*/

let calculator = {
    a: 5,
    b: 5,

    add() {
        return this.a + this.b;
    },

    subtract() {
        return this.a - this.b;
    },

    multiply() {
        return this.a * this.b;
    },

    divide() {
        return this.a / this.b;
    }
}

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());

