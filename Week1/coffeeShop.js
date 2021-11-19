// version 2

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
  processOrder(order, menuItemsArray, orderType){
    
    let typeName = ""
    if(orderType === "drinks"){
      typeName = "Drinks Order"
    }else {
      typeName = "Food Order"
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
      }else {
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
    return returnValue
  },
};

//run
let myFoodOrder = [8, 4, 5, 9];
console.log(coffeeShop.foodOrdered(myFoodOrder));
let myDrinksOrder = [1, 2, 2, 7, 2];
console.log(coffeeShop.drinksOrdered(myDrinksOrder))
