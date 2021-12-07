// Challenge 3: Using the array.map method


// Version 1.....

const numbersArray = [1, 2, 3, 4, 5]
const numbers = numbersArray.map(element =>{
  return element * 3
});

console.log("Numbers v1: ", numbers)


// Version 2.....

const numbersArray2 = [2, 4, 6, 8, 10]

// this has to go above the declaration below so that it is initialised first
const multiplyByThree = (value) => {
  return value * 3
}
const numbers2 = numbersArray2.map(multiplyByThree);
console.log("Numbers v2: ", numbers2)