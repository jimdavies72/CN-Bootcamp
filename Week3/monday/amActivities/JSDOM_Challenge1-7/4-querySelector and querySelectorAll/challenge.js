//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple']

const liEl = document.querySelectorAll("li")

for (i = 0; i < liEl.length; i++){
  //console.log(liEl[i]);
  
  liEl[i].style.color = colours[i]

}
