// Activity 3

let pinAttempt = 1;
const maxPinAttempts = 3;

let accounts = [
  {
    pin: 1234,
    accName: "Mr James Davies",
    accBalance: 150,
    cardStatus: true,
  },
  {
    pin: 4321,
    accName: "Mr Joe Pringle",
    accBalance: 120,
    cardStatus: true,
  },
  {
    pin: 9999,
    accName: "Mr Norman S. Fletcher",
    accBalance: 120000,
    cardStatus: false,
  },
];

const checkPin = (pin) => {
  //attempt to return an account based on the pin entered
  let account = accounts.find((account) => account.pin === pin);
  return account;
};

const checkAccountStatus = (account) => {
  let isAccount = false;
  if (typeof account === "undefined") {
    // account not found

    if (pinAttempt === maxPinAttempts) {
      screen = 
      `
      Your card has been detained. Please contact your bank.
      `;
    } else {
      screen = 
      `
      Im sorry, but your pin number is incorrect. 
      You have ${maxPinAttempts - pinAttempt} attempts remaining.
      `;
      pinAttempt++;
    }
  } else if (account.cardStatus === false) {
    //account found
    // fraudulent use?

    screen = `
    Warning: This card may be being used fraudulently and
    has been detained.
    `;
  } else {
    //account ok
    isAccount = true;
    screen = "";
  }

  return [isAccount, screen];
};

const dispenseMoney = (account, withdrawal) => {
  if (withdrawal <= account.accBalance) {
    // money available
    screen = 
    `
    Thankyou ${account.accName} for your custom!
    Your current balance is: £${account.accBalance}
    You have withdrawn: £${withdrawal}.
    Your remaining balance is now: £${account.accBalance - withdrawal}.
    `;
    //reset the actual balance
    account.accBalance = account.accBalance - withdrawal;
  } else {
    // not enough funds
    screen = `
    Thankyou ${account.accName} for your custom!
    However, you do not have sufficient funds to withdraw: £${withdrawal}.
    Your current balance is: £${account.accBalance}.
    `;
  }
  return screen;
};

const dispensor = (pin, withdrawal) => {
  let screen = "";
  let account = checkPin(pin);
  let statusArray = Array.from(checkAccountStatus(account));

  if (statusArray[0] === false) {
    screen = statusArray[1];
  } else {
    screen = dispenseMoney(account, withdrawal);
  }
  return screen;
};

// Use case testing

// correct pin, correct funds
//console.log(dispensor(1234, 100), "\n");

// correct pin, incorrect funds
//console.log(dispensor(1234, 200), "\n");

// different account
//console.log(dispensor(4321, 50), "\n");

// withdrawal of 2 separate amounts, second take user over the limit.
//console.log(dispensor(1234, 100), "\n");
//console.log(dispensor(1234, 70), "\n");

// incorrect Pin - save
//console.log(dispensor(0000, 100),"\n")
//console.log(dispensor(0000, 100), "\n");
//console.log(dispensor(1234, 100),"\n");

// incorrect Pin - card detained
//console.log(dispensor(0000, 100),"\n")
//console.log(dispensor(0000, 100), "\n");
//console.log(dispensor(0000, 100),"\n");

// correct pin but card suspended
//console.log(dispensor(9999, 1000), "\n");
