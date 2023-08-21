/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {

  constructor() {
    this.result = 0;
    console.log("initialized", this.result);
  }
  add(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input.");
    }
    this.result += num;
    return this;
  }

  subtract(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input.");
    }
    this.result -= num;
    return this;
  }

  multiply(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input.");
    }
    if (this.result === 0) {
      this.result = 1;
    }
    this.result *= num;
    return this;
  }

  divide(num) {
    if (isNaN(num) || num === 0) {
      throw new Error("Invalid input or division by zero.");
    }
    this.result /= num;
    return this;
  }


  // add(num) {
  //   console.log(this.result);
  //   this.result = this.result + num;
  //   console.log("add",this.result);
  // }

  // subtract(num) {
  //   this.result -= num;
  // }

  // multiply(num) {
  //   if(this.result == 0) {
  //     this.result == 1;
  //   }
  //   this.result *= num;
  // }

  // divide(num) {
  //   if (isNaN(num) || num == 0) {
  //     throw new Error("Invalid input or division by zero.");
  //   }
  //   this.result /= num;
  //   return this;
  // }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, "");
    if (!/^[\d+\-*/().]+$/.test(sanitizedExpression)) {
      throw new Error("Invalid expression.");
    }

    try {
      this.result = eval(sanitizedExpression); // Use eval to calculate the expression
      return this;
    } catch (error) {
      throw new Error("Error calculating the expression.");
    }
  }
}

const cal = new Calculator();
// cal.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");

cal.add(10);
cal.divide(4);
console.log(cal.result);
module.exports = Calculator;
