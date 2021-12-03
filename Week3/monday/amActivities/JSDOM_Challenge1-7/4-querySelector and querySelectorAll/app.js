//console.log(document.querySelectorAll(".green"))
//console.log(document.querySelector(".list-parent"))

const listItems = document.querySelectorAll("li:nth-child(even)");

console.log(listItems)

for(let i = 0; i < listItems.length; i++){
  listItems[i].style.color = "lightgreen"
}
