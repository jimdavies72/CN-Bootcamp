

const xoArray = [
  "   x", "   O   ", "     ",
  "x", "x", "O",
  "o", "", ""];

  
  /* format the input data to single character and lower case */
  for (let i = 0; i < xoArray.length; i++){

    if (xoArray[i].indexOf("x") >= 0 || xoArray[i].indexOf("X") >= 0) {
      xoArray[i] = "x";
    } else if (xoArray[i].indexOf("o") >= 0 || xoArray[i].indexOf("O") >= 0) {
      xoArray[i] = "o";
    } else {
      xoArray[i] = " ";
    }
  }

//set the grid 
const gridArray = [
  ` ${xoArray[0]} | ${xoArray[1]} | ${xoArray[2]} `,
  `___|___|___`,
  ` ${xoArray[3]} | ${xoArray[4]} | ${xoArray[5]}  `,
  `___|___|___`,
  ` ${xoArray[6]} | ${xoArray[7]} | ${xoArray[8]}  `,
  `   |   |   `,
];

//draw the grid
for (let i = 0; i < gridArray.length; i++){
  console.log(gridArray[i]);
}
