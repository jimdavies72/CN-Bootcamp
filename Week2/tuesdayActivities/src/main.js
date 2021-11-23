const dataChecker = (string, rank) => {
  if(string === "codenation" && rank === 1){
    return `${string} is rank ${rank}`
  } else if (string === "codenation" && rank !== 1){
    return `${string} is only rank ${rank}`;
  } else {
    return `neither ${string} or rank ${rank} is correct`;
  }
}

console.log(dataChecker("codenation", 1))
