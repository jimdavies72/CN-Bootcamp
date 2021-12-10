import fetch from "node-fetch";

const getPeople = async () => {
  try {
    const records = 2;
    // url to random person generator website
    const url = "https://randomuser.me/api/?results=" + records;
    //console.log(url)

    const response = await fetch(url);
    //console.log(`fetch response: ${response.status}`);
    return await response.json();

  } catch (err) {
    console.log(`getPeople error: ${err}`);
  }
};

getPeople().then(data => {
  let people = data.results;
  //console.log(people)

  for(let i = 0; i < people.length; i++){
    let person = `${people[i].name.title} ${people[i].name.first} ${people[i].name.last}`;
  
    console.log(person)
  }
})

