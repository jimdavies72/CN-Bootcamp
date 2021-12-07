// Challenge 2: Running Total Callback function

const sum = (num1, num2) =>{
  return num1 + num2
}

const runningTotal = (num1, num2, fn) =>{
  let runningTotal = 0
  for (i = 0; i < 5; i++){
    runningTotal += fn(num1, num2)
    //console.log(runningTotal)
  }
  return runningTotal
}

//runningTotal(3, 4, sum);
console.log(runningTotal(3, 4, sum))