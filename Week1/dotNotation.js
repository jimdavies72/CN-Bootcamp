const gridArray = ["___|___|___", "___|___|___", "   |   |"];

for (let i=0; i < gridArray.length; i++){
  console.log (gridArray[i])
}

const myArray = [
  "Apples",
  "Pears",
  "Banana"
]

// care needs to be taken when copying arrays......
let dupeArray = []
dupeArray = myArray
dupeArray[0] = "Cheesecake"
console.log("myArray element 0:", myArray[0])
console.log(`dupeArray elelemnt 0: ${dupeArray[0]}`)

for (let i=0; i < myArray.length; i++){
  console.log(`Fruit: ${myArray[i]}`)
}

console.log(myArray)
myArray.unshift("Guarva")
console.log(myArray);
myArray.push("Orange")
console.log(myArray);
myArray.shift()
console.log(myArray);
myArray.pop()
console.log(myArray);
myArray.push("Grape")
console.log(myArray);
myArray.splice(1,1)
console.log(myArray);

const helloWorld = "hello-world"
const helloWorldArray = Array.from(helloWorld)

for (let i = 0; i < helloWorldArray.length; i++) {
  console.log(helloWorld[i]);
}

const splitArray = helloWorld.split("-")
console.log(splitArray);

const myInformationArray = [
  "James",
  21,
  false,
  ["Cake", "Pizza", "Tea"]
]

console.log(myInformationArray);
