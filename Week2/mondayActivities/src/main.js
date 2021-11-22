// Monday PM Test - 2D Arrays

// let shopping = [
//   tea = ["tea", "sugar", "milk"],
//   stew = ["potatoes", "carrots", "onions"],
//   sammich = ["cheese", "bread", "butter"]
// ]

// const item = shopping[1][2]
// console.log(`item: ${item}`)


// HTML Activities
const btn = document.getElementById("btn")
const para = document.getElementById("para")
const textArea = document.getElementById("tA")

btn.addEventListener("click", () => {
  textArea.textContent = para.textContent
})
