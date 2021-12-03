const image = document.getElementById("cat")
const button = document.getElementById("submit")

console.log(image.style)

button.addEventListener("click", () => {
  if (image.style.display === "none") {
    image.style.display = "block";
    button.textContent = "hide"
  } else {
    image.style.display = "none";
    button.textContent = "view";
  }
})
