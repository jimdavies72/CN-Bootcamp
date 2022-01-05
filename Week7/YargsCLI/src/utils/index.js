const fs = require("fs");

const addMovie = (movieArr, movieObj) => {
  //console.log(movieObj);
  try {
    movieArr.push(movieObj);
    const stringObj = JSON.stringify(movieArr);
    fs.writeFileSync("./storage.json", stringObj);
  } catch (error) {
    displayInfo(error.message);
  }
};

const listMovies = () => {
  try {
    console.log(JSON.parse(fs.readFileSync("./storage.json")));
  } catch (error) {
    displayInfo("There are no movies to list.");
  }
};

const listSingleMovie = (title) => {
  try {
    const movieArr = JSON.parse(fs.readFileSync("./storage.json"));
    const movieObj = movieArr.find((movieArr) => movieArr.title === title);

    if (movieObj) {
      displayInfo(movieObj);
    } else {
      displayInfo("Movie was not found in database.");
    }
  } catch (error) {
    displayInfo(error.message);
  }
};

const updateMovie = (title, actor) => {
  try {
    const movieArr = JSON.parse(fs.readFileSync("./storage.json"));
    const movieObj = movieArr.find((movieArr) => movieArr.title === title);
    movieObj.actor = actor;

    const stringObj = JSON.stringify(movieArr);
    fs.writeFileSync("./storage.json", stringObj);
  } catch (error) {
    // ENOENT
    if (error.code === "ENOENT") {
      displayInfo("Movie database was not found.");
    } else {
      displayInfo(
        "Movie was not found in the database. No update has been made."
      );
    }
  }
};

const deleteMovie = (title) => {
  try {
    const movieArr = JSON.parse(fs.readFileSync("./storage.json"));
    const index = movieArr.findIndex((obj) => obj.title === title);

    if (index !== -1) {
      movieArr.splice(index, 1);
      const stringObj = JSON.stringify(movieArr);
      fs.writeFileSync("./storage.json", stringObj);
    } else {
      displayInfo("Movie was not found in the database.");
    }
  } catch (error) {
    // ENOENT
    if (error.code === "ENOENT") {
      displayInfo("Movie database was not found.");
    } else {
      displayInfo(error.message);
    }
  }
};

const displayInfo = (message) => {
  console.clear();
  console.log(message);
  console.log("\n");
};

module.exports = {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
  listSingleMovie,
};
