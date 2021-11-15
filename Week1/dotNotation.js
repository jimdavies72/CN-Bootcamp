const gridArray = ["___|___|___", "___|___|___", "   |   |"];

for (let i=0; i < gridArray.length; i++){
  console.log (gridArray[i])
}

const myArray = [
  "Apples",
  "Pears",
  "Banana"
]

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