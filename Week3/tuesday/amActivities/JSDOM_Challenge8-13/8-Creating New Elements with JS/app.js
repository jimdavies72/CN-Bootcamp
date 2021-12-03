const input = document.getElementById("input");
const button = document.getElementById("submit");
const showHideBtn = document.getElementById("showhide-btn")
let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", () => {
  let listItem = document.createElement("li");
  listItem.textContent = input.value;
  list.appendChild(listItem);
  input.value="";
});

showHideBtn.addEventListener("click", () => {
  if (showHideBtn.innerHTML.toLowerCase() == "hide"){
    showHideBtn.innerHTML="Show";
    list.style.display = "none";
  }else {
    showHideBtn.innerHTML="Hide";
    list.style.display = "";
  }

})
