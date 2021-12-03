const userBtn = document.getElementById("user-btn");
const textArea = document.getElementById("text-area");
const styleBtn = document.getElementById("style-btn");
let output = document.getElementById("output-el");


styleBtn.addEventListener("click", () => {
  output.classList.add("ulStyle");
})

userBtn.addEventListener("click", () => {
  try {
    let records = 20;
    //console.log("plumbing")
    textArea.innerHTML = "Getting Data...";
    const url = "https://randomuser.me/api/?results=" + records;
    fetch(url)
      .then(function (response) {
        //console.log(response.status);
        return response.json();
      })
      .then(function (data) {
        let people = data.results;

        // return the data into output area html
        let html = people.map(function (val, i) {
          return `<li style="cursor:pointer">${i + 1}: ${val.name.first} ${val.name.last}</li>`;
        });
        output.innerHTML = `<ul  style="list-style-type:none">${html.join(
          ""
        )}</ul>`;



        // return the data into a text area
        textArea.innerHTML = "";
        for (let i = 0; i < people.length; i++) {
          let firstName = people[i].name.first.toUpperCase();
          let lastName = people[i].name.last.toUpperCase();
          textArea.innerHTML += `Person ${i + 1}: ${firstName} ${lastName}\n`;
        }
      });
  } catch (error) {
    console.log(error);
  } finally {
    //console.log(document.body);

  }
});
