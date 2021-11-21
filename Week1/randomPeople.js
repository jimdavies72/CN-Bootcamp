const firstnames = [
  "James",
  "Anna",
  "Sarah",
  "John",
  "Terry",
  "Sean",
  "Joanne",
  "Mark",
  "Kenny",
  "Louise"
]

const lastnames = [
  "Smith",
  "Davies",
  "Willis",
  "Andrews",
  "Bucket",
  "Fletcher",
  "Jones",
  "Worthington",
  "Chan",
  "Boyle",
  "Phillips"
]

const skills = [
  "Perl",
  "C#",
  "JavaScript",
  "Python",
  "SQL Server",
  "CSS",
  "HTML",
  "Postgress",
  "WordPress",
  "VB",
  "Oracle",
  "MS Office"
]

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = (array) => {
  return getRandomInt(0, array.length - 1)
}

const generatePeople = (rosta, maxNumberOfSkills) => {
  let people = []
  for (i = 0; i < rosta; i++){
    
    let skillsArray = []
    //clone the original array so we can repeat on each skills loop
    let skillsClone =[...skills]
    
    //give each person a random number of unique skills between 0 and the max
    for (j = 0; j < getRandomInt(0, maxNumberOfSkills); j++){
      let randomSkillElement = getRandomElement(skillsClone);
      skillsArray[j] = skillsClone[randomSkillElement];
      //remove the skill from the pick array, as we dont want to duplicate
      skillsClone.splice(randomSkillElement, 1);
    }

    let person = {
      firstname: `${firstnames[getRandomElement(firstnames)]}`,
      lastname: `${lastnames[getRandomElement(lastnames)]}`,
      skills: skillsArray
    };
    people.push(person)
  }  

  return people 
}

//taken and adapted from ourcodeworld.com
const dynamicSort = (property) => {
  let sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return (a, b) => {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
}


const maxNumberOfSkills = 5
const rosta = 10

myData = generatePeople(rosta, maxNumberOfSkills)
myData.sort(dynamicSort("lastname"))
console.log(myData)

