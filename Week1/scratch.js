let films = [
  "Goodwill Hunting",
  "Saving Private Ryan",
  "Ghostbusters",
  "Goodfellas"
];


for (let i = 0; i < films.length; i++) {
  //console.log(films[i])
  let response = "";
  if (i === 2 && films[i] === "Ghostbusters") {
    console.log(`Film ${i + 1}: ${films[i]} - Yeay!!!`);
  } else if (i === 2 && films[i] !== "Ghostbusters") {
    console.log(`Film ${i + 1}: ${films[i]} - Boo!!!`);
  } else {
    console.log(`Film ${i + 1}: ${films[i]}`);
  }
}