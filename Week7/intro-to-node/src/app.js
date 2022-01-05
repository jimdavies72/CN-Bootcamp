//controller file.
// argv = argument vector

const fs = require("fs");
const inquirer = require("inquirer");
const { userChoices, movieQuestions } = require("./utils/questionArrays.js");
const { addMovie } = require("./utils/index");
const filePath = "./storage.json";

const app = async (clearConsole = true) => {
  let movieArray;

  if (clearConsole) {
    console.clear();
  }

  console.log("\n");
  let response = await inquirer.prompt(userChoices);
  if (response.addQuitOrReview === "Add") {
    try {
      movieArray = JSON.parse(fs.readFileSync(filePath));
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
    //quit
    displayMovies();
  }
};

const displayMovies = () => {
  if (fs.existsSync(filePath)) {
    console.clear();
    console.log(`
    Stored Movies...
    ________________
      `);
    console.log(getMovies());
    console.log("\n");
  } else {
    console.clear();
    console.log("\n");
    console.log("No movies currently stored!");
    console.log("\n");
  }
};

app();
