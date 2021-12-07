// Challenge 4: Function that returns a function


const multiply = (a, b) =>{
  return a * b
}

const add = (a, b) =>{
  return a + b
} 

const divide = (a, b) => {
  return a / b
}

const subtract = (a, b) =>{
  return a - b
}

const doMath = (num1) =>{
  return (num2, fn) => {
    return fn(num1, num2)
  }
}

// return the first (referenced )function and store it in a variable...
const returnedFunction = doMath(25)
//... take the function variable and pass num2 and a second maths function...
console.log("multiply: ", returnedFunction(4, multiply))
console.log("add: ", returnedFunction(25, add));
console.log("divide: ", returnedFunction(5, divide));
console.log("subtract: ", returnedFunction(5, subtract));


