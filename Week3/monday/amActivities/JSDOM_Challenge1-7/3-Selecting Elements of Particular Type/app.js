const paras = document.getElementsByTagName("p")
const liEl = document.getElementsByTagName("li")
const liCN = document.getElementsByClassName("not-orange")

// for (let i = 0; i < paras.length; i++){
//   console.log(paras[i])
// }


//console.log(liEl)
for (let i = 0; i < liEl.length; i++){
  liEl[i].style.color = "red";

  let cN = liEl[i].className;
  console.log(cN)
  if (cN === "not-orange") {
    liEl[i].style.color = "blue";
  } else {
    liEl[i].style.color = "orange";
  }
}


for (let i = 0; i < liEl.length; i++){
  liCN[i].style.color = "red"
}


