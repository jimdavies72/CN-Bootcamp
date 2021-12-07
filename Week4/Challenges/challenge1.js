// Challenge 1: Log Hello Code Nation 5 times callback function.

const logMessage = () => {
  console.log("Hello Code Nation")
}

const messagePlayer = (numTimes, fn) => {
  for (let i = 0; i < numTimes; i++){
    fn()
  }
}

messagePlayer(5, logMessage)

