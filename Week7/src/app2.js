const fs = require("fs");
const { addMovie2 } = require("./utils/addMovie2");

const app2 = () => {
  if (process.argv[2] === "title" && process.argv[4] === "actor") {
    addMovie2(process.argv[3], process.argv[5]);
  } else {
    console.log("I don't understand!!!!!");
  }
};

app2();

//console.log(process.argv);
