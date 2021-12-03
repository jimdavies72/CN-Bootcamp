const myHeading = document.getElementById("heading");

myHeading.addEventListener("click", () => {
  myHeading.style.color = "red";
});

myHeading.addEventListener("mouseover", () => {
  myHeading.style.color = "blue";
});

document.addEventListener("click", () => {
  myHeading.style.color = "green";
});
