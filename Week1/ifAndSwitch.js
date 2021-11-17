//if statement and switch


//if

let weather = "snowy"

if (weather === "sunny"){
  console.log("Suncream")
}else if (weather === "rainy"){
  console.log("umbrella");
}else {
  console.log("it could go either way");
}


//truthy and falsy

if(""){
  console.log("true");
} else {
  console.log("false");
}


//comparison operators 

myArray = [1]

// loose equals (==)
console.log("truthy/falsy: ", 1 == myArray); // returns true

// strict equals (===)
console.log(1 === "1"); //returns false
console.log(1 === 1); //returns true

// != not equal regardless of type
// !== strict not equal, value and type


// Logical Operators
/* && --> AND
True & True --> true
True & False --> false
False and False --> false
*/

/*
|| --> OR
True & True --> true
True & False --> true
False and False --> false
*/

let place = "manchester"
weather = "cloudy"

if (place == "manchester" && weather == "sunny"){
  console.log("manc and sunny");
} else if (place == "manchester" && weather == "rainy"){
  console.log("manc and rainy");
  
} else {
  console.log("weather/place something else");
}


//switch

const grade = 87

switch (true){
case grade >= 70:
  console.log("dist");
  break;
case grade >= 60:
  console.log("merit");
  break;
case grade >= 50:
  console.log("Pass");
  break;
default:
  console.log("fail")
  break;
}

//Activities

// Activity 1

const age = 121
const countryIn = "France"
const minAge = 18

if (age >= minAge && countryIn === "UK"){
  console.log("Yes I can Serve You");
  
}else {
  console.log("Sorry you are not old enough to drink here");
}

// Activity 2

const pizzaTopping = "pinapple"

switch (pizzaTopping){
  case "cheese":
    console.log("Important Ingredient")
    break;
  case "pepperoni":
    console.log(`I dont mind ${pizzaTopping}`);
    break;
  default:
    console.log(`${pizzaTopping} should not be on a pizza`);
    break;
}


// Activity 3

const password = "hello"
minPasswordLength = 8

if (password.length < minPasswordLength){
  console.log("Your password is too short, please try again.")
} else {
  console.log(`Your Password is: ${password}`);
}

let divisibleNum = 15

if (divisibleNum % 3 === 0 || divisibleNum % 5 === 0) {
  console.log("This number is divisible by 3 or 5");
} else {
  console.log("The number is not divisible by 3 or 5");
}

// Activity 4

let fizzBuzzNum = 15

if (fizzBuzzNum % 5 === 0 && fizzBuzzNum % 3 === 0) {
  console.log("fizz buzz");
} else if (fizzBuzzNum % 5 === 0 && fizzBuzzNum % 3 !== 0) {
  console.log("buzz");
} else {
  console.log("fizz");
}

//Activity 5

palindromeNum = 123454321
numString = Array.from(palindromeNum.toString()).reverse().join("");
if (palindromeNum == numString) {
  console.log(`${palindromeNum} is a palindrome`);
} else {
  console.log(`${palindromeNum} is not palindrome`);
}

// Activity 6

const time = 9
const placeOfWork = "Cheers Bar"
const townOfHome = "Bootle"

if (time <= 7){
  console.log(`I am at home in ${townOfHome}`);
  
}else if (time === 8){
  console.log(`I am commuting between ${townOfHome} and ${placeOfWork}`);
}else {
console.log(`I am at work at ${placeOfWork}`);
}

// Activity 7

hasVowel = false
//value = "qwzzzxqbv"
//value = "zzzzzzzzzazzzzz"
value = " asdasklj djklkjkldjklwq kaldxjskdj ajjjd".toLowerCase()
value = Array.from(value.toString()).reverse();
for (let i = 0; i < value.length; i++){
  if (
    value[i] == "a" || 
    value[i] == "e" || 
    value[i] == "i" || 
    value[i] == "o" || 
    value[i] == "u"
  ){
    console.log(`vowel found at position:  ${value.length - (i)}`)
    hasVowel = true
    break;
  }
}

// this is not necessary but for completeness
if (hasVowel === false){
  console.log("No vowel was found");
  
}

// Activity 8

const word = "Oppo".toLowerCase()

if (word.charAt(0) === word.charAt(word.length - 1)) {
  console.log(`first and last letter '${word.charAt(0)}' are the same`);
}else {
  console.log("letters are not the same");
}


// Activity 9

const num1 = 5
const num2 = 6

if ((num1 + num2) % 2 === 0){
  console.log(`The sum: ${num1 + num2} is even`);
  
}else {
  console.log(`The product: ${num1 * num2}`);
}


