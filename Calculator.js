/*
Instructions
- Create a function called calculator that has 3 arguments: value1, operator and value2
- By using a switch statement, ask for each case to find out what's the operator being passed to the function, then set the result of that operation by using value1 and value2
*/
//Add you code here
function calculator(firstNumber, operator, secondNumber) {
  switch(operator) {
    case '+':
      return firstNumber + secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '*':
      return firstNumber * secondNumber;
    
    case '/':
      if (secondNumber === 0) {
        return Infinity;
      }
      return firstNumber / secondNumber;
      }
  }

//uncomment next lines one by one, then check the console for results
// console.log(calculator(1, '+', 1))
// console.log(calculator(3, '-', 2))
// console.log(calculator(3, '*', 2))
// console.log(calculator(30, '/', 2))
// console.log(calculator(5, '/', 0))

//don't change this line
module.exports = calculator;
