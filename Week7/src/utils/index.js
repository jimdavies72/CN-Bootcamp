const fs = require("fs");

const addMovie = (movieArray, movieObject) => {
  try {
    movieArray.push(movieObject);
    //console.log(movieArray);

    const fileData = JSON.stringify(movieArray);
    //console.log(fileData);
    fs.writeFileSync("./storage.json", fileData);
  } catch (error) {
    console.log(error);
  }
};

getMovies = () => {
  return JSON.parse(fs.readFileSync("./storage.json"));
};

module.exports = {
  addMovie,
  getMovies,
};
