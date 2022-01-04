// this code is purely for reference against the code that finally worked. Not to be used.

const fs = require("fs");

const addMovieDeadCode = (movieArray, movieObject) => {
  try {
    movieArray.push(movieObject);
    //console.log(movieArray);

    const fileData = JSON.stringify(movieArray);
    //console.log(fileData);
    fs.writeFileSync("./storage.json", fileData);

    // const filePath = "./storage.json";
    // let movieArray = [];
    // let stringObj = {};

    // if (fs.existsSync(filePath)) {
    //   //stringObj = JSON.stringify({ title: title, actor: actor });
    //   // const fileData = fs.readFileSync(filePath, {
    //   //   encoding: "utf8",
    //   //   flag: "r",
    //   // });

    //   newData = { title: title, actor: actor };
    //   movieArray = JSON.parse(fileData);
    //   //console.log(movieArray);

    //   fileData.push(newData);
    //   //console.log("filedata: ", fileData);

    //   //console.log(stringObj);
    //   //movieArray.push([...stringObj]);
    //   fs.writeFileSync(filePath, stringObj);
    // } else {
    //   movieArray.push({ title: title, actor: actor });
    //   //const stringObj = JSON.stringify({ title: title, actor: actor });
    //   stringObj = JSON.stringify(movieArray);
    //   fs.writeFileSync(filePath, stringObj);
    // }
  } catch (error) {
    console.log(error);
  }
};

// write a txt file
// fs.writeFileSync(
//   "storage.txt",
//   `title: ${process.argv[3]}, actor: ${process.argv[5]}`
//);
