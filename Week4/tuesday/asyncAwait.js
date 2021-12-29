//you create an async function when you need to await a result from a source when we dont know
// how long the function/processing is going to take. for example, if we go to fetch data from a database 
// we do not know how long this will take so we want to hold up further processing in our code until
// it has completed - we dont want to try to write the data to the page until we actually have some data to write!

//take this example, what do you think the order of processing will be?:

console.log ("Start Processing - fetch data....")

//set time out simulating getting data from database.
setTimeout(() => {
   console.log("getting data from database....");
}, 2000);

console.log("write data to page")



//This is a trivial example of async/await....

// async await function....
const hello = async() =>{
  return await Promise.resolve("hello don")
}

// if you log the function reference it will return: [AsyncFunction: hello]
console.log(hello)

// if you log the function invokation you return: Promise { <pending> }
// this is because the hello function creates a promise of doing 'something' once it has completed.
console.log(hello())

// this function call will then (in this example) console.log the promise.
hello().then(console.log)