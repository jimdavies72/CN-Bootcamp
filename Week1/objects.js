// Objects

//object example
/*
let offer = "none"
let time = 1600
const cafe = {
  name: "whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: [
    "cappuccino",
    "latte",
    "filter coffee",
    "tea",
    "hot choc"
  ],
  breakfastOffer: "Free Croisant",
  lunchOffer: "Free drink with sammich",
  noOffer: "sorry no offer",
  openCafe(){
  if(this.hasSpecialOffers){
      return "time for a special offer"
    }  
  },  
  closeCafe(){
    return "we are closed"
  }  
}  

if(time < 1100) {
  offer = cafe.breakfastOffer
  console.log(offer);
}else if (time < 1500){
  offer = cafe.lunchOffer
  console.log(offer)
} else {
  offer = cafe.noOffer
  console.log(offer);
}  

console.log(cafe.openCafe())
*/

// Alarm clock example
/*
const day = "monday"
let alarm = ""
const alarmClock = {
  weekendAlarm: "no alarm needed",
  weekdayAlarm: "get up at 7am"
}

if (day === "saturday" || day === "sunday"){
  alarm = alarmClock.weekendAlarm
}else {
  alarm = alarmClock.weekdayAlarm
}
console.log(alarm)
*/


// Activities

// Activity 1 - Person object

/*
const person = {
  name: "james",
  age: 21,
  isAgeTrue: false,
  skills: [
    "javascript",
    "html",
    "css",
    "drinking milk and kicking ass"
  ],  
  songs: [],
  detectLie(){
    if (this.isAgeTrue === true) {
      this.isAgeTrue = false;
    } else {
      this.isAgeTrue = true
    }
    return this.isAgeTrue  
  }, 
  sayHi(){
    return `hello my name is: ${this.name}`
  } 
}  

person.songs = [
    "Sound of silence",
    "The man with the red face",
    "By the river"
  ]  

//console.log(`my name is: ${person.name}`)  
//console.group(person["name"]) //for using vars to access data

for (i=0; i< person.songs.length; i++){
  console.log(person.songs[i])
}  

console.log(person.sayHi());
console.log(person.detectLie());
console.log(person.detectLie());
console.log(person.detectLie());
console.log(person.detectLie());
*/


// Activity 2
/*
const pet = {
  name: "woofles",
  typeOfPet: "dog",
  age: 156,
  color: "mostly brown",
  eat(){
    let action = `${this.name} is eating`
    return action
  },
  drink(){
    let action = `${this.name} is drinking`;
    return action;
  }
}

console.log(pet.eat())
console.log(pet.drink());
*/


// Activity 3

//Version 1 - using 2d arrays to find the items...

// let formatter = new Intl.NumberFormat("en-UK", {
//   style: "currency",
//   currency: "GBP",
// });

// const coffeeShop = {
//   branch: "Liverpool",
//   drinks: [
//     [1, "tea", 2.5],
//     [2, "coffee", 3.99],
//     [3, "fanta", 1.5]  
//   ],
//   food: [
//     [4, "beans on toast", 3],
//     [5, "cheese panini", 3.50],
//     [6, "warldorf salad", 8],
//   ],
//   drinksOrdered(order) {
//     // loop the order
//     let cost = 0
//     let ticket = `
//     Ticket - Drinks
//     --------------------------
//     `;
//     for (let i = 0; i < order.length; i++){
//       // loop the food menu
//       for (let j = 0; j < this.drinks.length; j++){
//         // get the items. add to list
//         if (order[i] === this.drinks[j][0]){
//           cost += this.drinks[j][2];
//           ticket += 
//           `
//           ${this.drinks[j][1]}: ${formatter.format(this.drinks[j][2])}` + "\n" 
//         }
//       }
//     }
//     ticket +=
//     `
//     --------------------------
//             Total Cost: ${formatter.format(cost)}
//     `
//     return ticket;
//   },
//   foodOrdered(order) {
//     // loop the order
//     let cost = 0
//     let ticket = `
//     Ticket - Food
//     --------------------------
//     `;
//     for (let i = 0; i < order.length; i++){
//       // loop the food menu
//       for (let j = 0; j < this.food.length; j++){
//         // get the items. add to list
//         if (order[i] === this.food[j][0]){
//           cost += this.food[j][2];
//           ticket += 
//           `
//           ${this.food[j][1]}: ${formatter.format(this.food[j][2])}` + "\n" 
//         }
//       }
//     }
//     ticket +=
//     `
//     --------------------------
//             Total Cost: ${formatter.format(cost)}
//     `
//     return ticket;
//   }
// };

// let myFoodOrder = [6, 5]
// let myDrinksOrder = [2,2, 1, 0]

//console.log(coffeeShop.foodOrdered(myFoodOrder))
//console.log(coffeeShop.drinksOrdered(myDrinksOrder));


// version 2 - using array of objects...

let formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
});

const coffeeShop = {
  branch: "Liverpool",
  drinks: [
    {
      menuItem: 1,
      drink: "tea",
      price: 2.5,
    },
    {
      menuItem: 2,
      drink: "coffee",
      price: 3.99,
    },
    {
      menuItem: 3,
      drink: "fanta",
      price: 1.5,
    },
  ],
  food: [
    {
      menuItem: 4,
      food: "beans on toast",
      price: 3,
    },
    {
      menuItem: 5,
      food: "cheese panini",
      price: 3.5,
    },
    {
      menuItem: 6,
      food: "warldorf salad",
      price: 8,
    },
  ],
  processOrder(order, menuItemsArray, orderType) {
    
    let typeName = "";
    if (orderType === "drinks") {
      typeName = "Drinks Order";
    } else {
      typeName = "Food Order";
    }
    let cost = 0;
    let ticket = `
    Ticket - ${typeName}
    --------------------------`;
    
    // loop the order
    for (let i = 0; i < order.length; i++) {
      const found = menuItemsArray.find((o) => o.menuItem === order[i]);
      if (typeof found !== "undefined") {
        cost += found.price;

        if (orderType === "drinks") {
          ticket +=
            `
          ${found.drink}: ${formatter.format(found.price)}` + "\n";
        } else {
          ticket +=
            `
          ${found.food}: ${formatter.format(found.price)}` + "\n";
        }
      } else {
        ticket +=
          `
        Something went wrong!` + "\n";
      }
    }
    ticket += `
    --------------------------
             Total Cost: ${formatter.format(cost)}
    `;
    return ticket;
  },

  drinksOrdered(order) {
    const returnValue = this.processOrder(order, this.drinks, "drinks");
    return returnValue;
  },
  foodOrdered(order) {
    const returnValue = this.processOrder(order, this.food, "food");
    return returnValue;
  },
};

let myFoodOrder = [8, 4, 5, 9];
console.log(coffeeShop.foodOrdered(myFoodOrder));
let myDrinksOrder = [1, 2, 2, 7, 2];
console.log(coffeeShop.drinksOrdered(myDrinksOrder));