//controller file.
// argv = argument vector

const fs = require("fs");
const inquirer = require("inquirer");

const { userChoices, movieQuestions } = require("./utils/questionArrays.js");
const { addMovie } = require("./utils/index");

const app = async () => {
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

    displayMovies();

    // if (process.argv[2] === "title" && process.argv[4] === "actor") {
    //   addMovie(movieArray, { title: process.argv[3], actor: process.argv[5] });
    //   //console.log("add movie done");
    // } else {
    //   //console.log("I dont understand");
    // }
  } else if (response.addQuitOrReview === "Review") {
    displayMovies();
  }
};

const displayMovies = () => {
  console.log(`
    Stored Movies...
    _________________
    
    `);
  console.log(getMovies());
};

app();
//console.log(process.argv);
