const userChoices = [
  {
    type: "list",
    name: "addQuitOrReview",
    message: "Movies - What would you like to do?",
    choices: ["Add", "Quit", "Review"],
  },
];

const movieQuestions = [
  {
    type: "input",
    name: "movieName",
    message: "What is the movie name?",
  },
  {
    type: "input",
    name: "actor",
    message: "What is the actors name?",
  },
];

module.exports = {
  userChoices,
  movieQuestions,
};
