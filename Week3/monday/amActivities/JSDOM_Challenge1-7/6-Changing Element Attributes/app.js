const image = document.getElementById("image")
const input = document.getElementById("input")
const button = document.getElementById("submit")

const imgAddress =
  "https://wearecodenation.com/static/dave1-427e2fa2b289e8d0161f578886768067.jpg";


  button.addEventListener("click", () =>{
    image.src = imgAddress
    console.log(image.src)
  })