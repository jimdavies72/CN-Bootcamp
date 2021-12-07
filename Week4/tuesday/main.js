// scope activity

// const a = 10;

// const func = () =>{
//   const i = 5;
//   console.log(i)
//   for (let i = 0; i<3; i++){
//     console.log(i)
//   }

// }

// console.log(i)

// func()


// Synchronous / Asynchronous

// console.log("start Code");

// setTimeout(() => {
//   console.log("waiting for timeout to complete....");
// }, 3000);

// console.log("Finish Code")

const hello = async() =>{
  return "hello"
}

// this returns a promise
console.log(hello())

// this consumes the promise and returns the value of it
hello().then((value)=> console.log(value))

//can also be written
hello().then(console.log)

// await
const goodbye = async() =>{
  return await Promise.resolve("goodbye")
}

goodbye().then(console.log)

