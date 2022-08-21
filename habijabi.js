const test = [
  {
    name: "Japan",
    continent: "Asia",
  },
  {
    name: "Finland",
    continent: "Europe",
  },
  {
    name: "Sudan",
    continent: "Africa",
  },
  {
    name: "France",
    continent: "Europe",
  },
];

// Sort the country based on Continent
// returns me new array where there is europe continent
// Return me as string all countries name will be capital letter
// Return me new Obj only africa

let europeCountries = "";
test.forEach((e) => {
  if (e.continent === "Europe") {
    return (europeCountries += e.name + "\n");
  }
});
console.log(europeCountries);

let capitalLetter = "";
test.forEach((e) => {
  return (capitalLetter += e.name.toLocaleUpperCase() + "\n");
});
console.log(capitalLetter);

let africaOnly = "";
test.forEach((e) => {
  if (e.continent === "Africa") {
    return (africaOnly += e.name);
  }
});
console.log({ name: [africaOnly] });
