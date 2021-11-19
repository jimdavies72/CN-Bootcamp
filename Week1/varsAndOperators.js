// Variables and operators

/*

Arethmetic Operators

** = to ther power of

% = modulous
10 % 3  = 1


Assignment Operators

*= 
let age = 27
console.log(age *= 2)

-=
+=
++
--

*/

/*
let i = 10
//i = i + 2
i += 2
console.log(i);
*/

//Activites

// Activity 1
let firstName = "james"; // camelCase
let age = 21;
let favouriteColor = "Red";

console.log(
  `My name is ${firstName} I am ${age} and my favourite color is ${favouriteColor}`
);

age = 22;
favouriteColor = "Green";

console.log(
  `My name is ${firstName} I am ${age} and my favourite color is ${favouriteColor}`
);

// Activity 2

function myMenu(breakfast, lunch, dinner, today) {
  let day = "today";
  if (today === false) {
    day = "tomorrow";
  }

  return `The menu ${day} is: Breakfast: ${breakfast}, Lunch: ${lunch}, Dinner: ${dinner}.`;
}

let breakfast = "Coffee";
let lunch = "Sandwich";
let dinner = "Pasta";
let today = true;

console.log(myMenu(breakfast, lunch, dinner, today));

breakfast = "Tea";
lunch = "Salad";
dinner = "Chicken";
today = false;

console.log(myMenu(breakfast, lunch, dinner, today));

//Activity 3

function daysBetweenDates(firstDate, secondDate) {
  const difference = secondDate.getTime() - firstDate.getTime();
  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

let myBirthday = new Date("2021-12-22");
const todaysDate = new Date();

console.log(daysBetweenDates(todaysDate, myBirthday));

//Activity 4

const space1 = "x";
const space2 = "o";
const space3 = " ";
const space4 = "x";
const space5 = "x";
const space6 = " ";
const space7 = "o";
const space8 = " ";
const space9 = " ";

const gridArray = [
  ` ${space1} | ${space2} | ${space3} `,
  `___|___|___`,
  ` ${space4} | ${space5} | ${space6}  `,
  `___|___|___`,
  ` ${space7} | ${space8} | ${space9}  `,
  `   |   |   `,
];

for (let i = 0; i < gridArray.length; i++) {
  console.log(gridArray[i]);
}

// Activity 5 -- for Tomorrow

const isTrue = true;

if (isTrue) {
  console.log(`Its all true your honour! Im guilty as charged`);
} else {
  console.log(`Not me guvnor, I wuz nowhere near the robbery`);
}

function numToday(dayNum) {
  let day = "";
  switch (dayNum) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
      day = "???";
      break;
  }
  return day;
}

console.log(`Today is: ${numToday(2)}`);
