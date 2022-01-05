//controller file.
// argv = argument vector

const fs = require("fs");
const inquirer = require("inquirer");
const { userChoices, movieQuestions } = require("./utils/questionArrays.js");
const { addMovie } = require("./utils/index");

const app = async (clearConsole = true) => {
  if (clearConsole) {
    console.clear();
  }

  console.log("\n");
  let movieArray;
  let response = await inquirer.prompt(userChoices);
  if (response.addQuitOrReview === "Add") {
    try {
      movieArray = JSON.parse(fs.readFileSync("./storage.json"));
      //console.log(movieArray);
    } catch (error) {
      movieArray = [];
    }

    response = await inquirer.prompt(movieQuestions);

    addMovie(movieArray, { title: response.movieName, actor: response.actor });

    app(true);
  } else if (response.addQuitOrReview === "Review") {
    displayMovies();
    app(false);
  } else {
    displayMovies();
  }
};

const displayMovies = () => {
  console.clear();
  console.log(`
  Stored Movies...
  ________________
    `);
  console.log(getMovies());
  console.log("\n");
};

app();
