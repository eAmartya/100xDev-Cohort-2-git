// /*
//   Implement a class `Calculator` having below methods
//     - initialise a result variable in the constructor and keep updating it after every arithmetic operation
//     - add: takes a number and adds it to the result
//     - subtract: takes a number and subtracts it from the result
//     - multiply: takes a number and multiply it to the result
//     - divide: takes a number and divide it to the result
//     - clear: makes the `result` variable to 0
//     - getResult: returns the value of `result` variable
//     - calculate: takes a string expression which can take multi-arithmetic operations and give its result
//       example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
//       Points to Note: 
//         1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
//         2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

//   Once you've implemented the logic, test your code by running
// */

// class Calculator {
//   result;
//   constructor(number){
//     result = number;
//   }
//   //addition method:
//   add(n){
//     this.result+=n;
//   }
//   //subtraction method:
//   subtract(n){
//     this.result-=n;
//   }
//   //muliplication method:
//   multiply(n){
//     this.result*=n;
//   }
//   //division method:
//   divide(n){
//     this.result/=n;
//   }
//   //clear method
//   clear(){
//     this.result = 0;
//   }
//   //get result method:
//   getResult(){
//     return this.result;
//   }
//   //the golaith of the problem:
//   calculate(str){
//     let array = str.split(' ');
  
//     console.log(array);
//     function spaceEater(arr){
//       for(let i = 0;i<arr.length;i++){
//         if(arr[i].charCodeAt(0)==32||arr[i].length==0){
//             console.log(arr[i]);
//             arr.splice(i,1);
//             i-=1;
//         }
//       }
//     }
  
//   spaceEater(array);
//   let newString = '';
//   for(let i = 0;i<array.length;i++){
//       newString += array[i];
//   }
//   return eval(newString);
//   }
// }

// module.exports = Calculator;

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
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(number) {
    this.result += number;
  }
  subtract(number) {
    this.result -= number;
  }
  multiply(number) {
    this.result *= number;
  }
  divide(number) {
    if (number === 0) {
      throw new Error("Number cant be Zero");
    }
    this.result /= number;
  }
  clear() {
    this.result = 0;
  }
  calculate(expression) {
    try{
      this.result = eval(expression);
      if (this.result === Infinity) {
        throw new Error("Can't divide by Zero");
      }
    }catch{
      throw new Error("Expression is wrong")
    }
  }

  getResult() {
    return this.result;
  }
}

module.exports = Calculator;