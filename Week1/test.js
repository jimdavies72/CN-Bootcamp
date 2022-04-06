const phoneticLookup = (val) => {
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
  };

  return lookup[val] ? lookup[val] : "No Value Found";
};

console.log(phoneticLookup("delta"));
