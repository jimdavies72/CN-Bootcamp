
//add copyright date
const dateEl = document.getElementById("date")
dateEl.innerHTML = new Date().getFullYear()

// accordian quesitons
const questions = document.querySelectorAll(".question");


// toggle links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  // this requires the .show-links class which uses a fixed height.
  // this can be a problem if new links are added or links removed.
  // as the height will not automatically adjust 
  //linksContainer.classList.toggle("show-links")

  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height
  if (containerHeight === 0){
    //links are hidden, so we need to make the size be equal to height of the links...
    linksContainer.style.height = `${linksHeight}px`
  } else{
    linksContainer.style.height = `0px`
  }
})

const navBar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", () => {
  //console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset
  const navHeight = navBar.getBoundingClientRect().height
  if (scrollHeight >= navHeight){
    navBar.classList.add("fixed-nav")
  } else {
    navBar.classList.remove("fixed-nav")
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link")
  }else {
    topLink.classList.remove("show-link");
  }
})

const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    //removes the default event action
    event.preventDefault()
    //navigate to specific spot

    //get the element attribute but at position 1 in the string (ignoring the starting # of the href in this case -> #about becomes about)
    const id = event.currentTarget.getAttribute("href").slice(1)
    //console.log(id);
    const element = document.getElementById(id)
    
    // calculate the heights
    const navHeight = navBar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navBar.classList.contains("fixed-nav")
    let position = element.offsetTop - navHeight;
    if(!fixedNav){
      position = position - navHeight
    }
    //nav links are open
    if(navHeight > 82 ){
      position = position + containerHeight
    }

    //console.log(position)
    window.scrollTo({
      left: 0, 
      top: position
    })
    linksContainer.style.height = 0
  })
})


// About me accordian 

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn")
  //console.log(btn)
  
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question){
        item.classList.remove("show-text")
      }
    })
    question.classList.toggle("show-text");
  })
})