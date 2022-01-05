/* 
This was my version of the code prior to discussion with Michael.

The line of code I was missing at the time was: 
'movieArray = JSON.parse(fileData)' 
that when added, resolves the problem I had with the
file data (storage2.json) being returned as a string.

*/

const fs = require("fs");

const addMovie2 = (title, actor) => {
  try {
    const filePath = "./storage2.json";
    let movieArray = [];
    let stringObj = {};

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, {
        encoding: "utf8",
        flag: "r",
      });

      movieArray = JSON.parse(fileData);
      //console.log(movieArray);
    }

    movieArray.push({ title: title, actor: actor });
    stringObj = JSON.stringify(movieArray);

    fs.writeFileSync(filePath, stringObj);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie2,
};

// how to write a txt file

// fs.writeFileSync(
//   "storage.txt",
//   `title: ${process.argv[3]}, actor: ${process.argv[5]}`
//);
