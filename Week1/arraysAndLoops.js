// Arrays

/*

// 1d Array

const coffeeOrder = [
  "Alex - Cortado",
  "Ben - Cortado",
  "Charlie - Whatevers new"
]

console.log(coffeeOrder[2]);
coffeeOrder[1] = "Anne - vanilla latte"
console.log(coffeeOrder);
coffeeOrder.push("James - Tea");
console.log(coffeeOrder);
coffeeOrder.pop()
console.log(coffeeOrder);


// 2d Array

let myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(myArray[0][1])


//Activity 0

let mySongs = [
  "Cafe Del Mar",
  "OverKill",
  "Sympathy for the devil"
]

mySongs.push("Skinny Love")
mySongs.push("Just Like Heaven")
mySongs.pop()


for (let i = 0; i < mySongs.length; i++){
  console.log(mySongs[i])
}

// remove 1 song at index 1 in the array
mySongs.splice( 1, 1)

console.log(mySongs);

// Loops

// Activity 0.1

drinks = [
  "Tea",
  "Diet Coke",
  "Vimto",
  "Water"
]

for (let i = 0; i < drinks.length; i++){
  console.log(`${i + 1}: ${drinks[i]}`)
}


let multiplesTwo = []

for(let i = 0; i < 20; i++){
  if(i % 2 == 0){
    multiplesTwo.push(i)
  }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`);


// while loops
let age = 15

while(age < 18){
  console.log("You are a child");
  age++ 
}
console.log("you are an adult!");


let cards = [
  "diamond",
  "spade",
  "heart",
  "club"
]
let currentCard = "club"

while(currentCard != "spade"){
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random()*4)]
}

console.log(currentCard);



books = [
  "War of the Worlds",
  "Animal Farm",
  "1984",
  "The Light Fantastic"
]

books.forEach((book) => {
  console.log(book)
})

*/

//Activities

// Activity 1

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let films = [
  "Goodwill Hunting",
  "Saving Private Ryan",
  "Ghostbusters",
  "Goodfellas",
  "Taxi Driver",
]

/*
films.unshift("No Country For Old Men")
films.push("Back to The Future")

for(let i=0; i < films.length; i++){
  console.log(`${i + 1}: ${films[i]}`)
}
*/

// Activity 2
/*
let counter = 1
while (counter < 7){
  console.log(`Random Number ${counter}: ${getRandomInt(1, 50)}`);
  counter++
}
*/

// Activity 3
/*
for (let i = 9; i >= 0; i--){
  console.log(i)
}
*/

//Activity 4
/*
const yayBooPosition = 2
let newFilms = films.splice(0,4)
//console.log(`new films: ${newFilms}`)
for(let i = 0; i < newFilms.length; i++){
  //console.log(newFilms[i])
  let response = ""
  if (i === yayBooPosition && newFilms[i] === "Ghostbusters") {
    console.log(`Film ${i + 1}: ${newFilms[i]} - Yeay!!!`);
  } else if (i === yayBooPosition && newFilms[i] !== "Ghostbusters") {
    console.log(`Film ${i + 1}: ${newFilms[i]} - Boo!!!`);
  } else {
    console.log(`Film ${i + 1}: ${newFilms[i]}`);
  }
}
*/

//Activity 5
/*
let numChances = 20
let sevenCounter = 0
let randomNumber = 0
for (i = 0; i < numChances; i++){
  randomNumber = getRandomInt(1, 30)
  if( randomNumber % 7 === 0){
    console.log(randomNumber);
    sevenCounter++
  }
}

console.log(`Lucky 7's: ${sevenCounter}`)
*/


//Activity 6
/*
let bobsFollowers = [
  "James",
  "Anne",
  "Suzanne",
  "Frank"
]

let hannahsFollowers = [
  "Charlotte",
  "James",
  "Andy",
  "Suzanne"
]

for (i = 0; i < bobsFollowers.length; i++){
  for(j = 0; j < hannahsFollowers.length; j++){
    if(bobsFollowers[i] === hannahsFollowers[j]){
      console.log(`Match: ${bobsFollowers[i]} and ${hannahsFollowers[j]}`);
    }else {
      // not needed, was just for testing
      console.log(`Not a match: ${bobsFollowers[i]} and ${hannahsFollowers[j]}`);
    }
  }
}
*/


// Activity 7

/*
  do loops - very similar to while loops except that the condition is exectued at the bottom of the loop and not at the top. This means that the code will be executed AT LEAST once before exiting out of the loop.

  the benefits for a while is that code will only execute whilst the condition is true so we can prevent execution by ensuring the condition is false before hand.

  the benefit for do is that we can execute one circuit of the code before checking/setting the condtion: e.g.
  is it too hot? yes! then set condtion = false.



// when isRunning is false the loop should display nothing
let isRunning = false
while (isRunning) {
  console.log(isRunning);
  console.log("only execute while true");
  isRunning = false
}

console.log("\n")

// Whether isRunning is true or false, the code will execute at least once.
do {
  console.log(isRunning);
  console.log("only execute while true");
  isRunning = false;
}while(isRunning)
*/