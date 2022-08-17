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

// function organizedContinent(a) {
//   return a;
// }
// let result = "";

// test.forEach((e) => {
//   return (result +=
//     e.continent
//       .charAt(0)
//       .split("")
//       .sort((A, B) => A - B) + "\n");
// });

// console.log(result);

// function europeContinent(a) {
//   return a.filter((e) => {
//     return e.continent;
//   });
// }
// console.log(
//   europeContinent([
//     {
//       name: "Japan",
//       continent: "Asia",
//     },
//     {
//       name: "Finland",
//       continent: "Europe",
//     },
//     {
//       name: "Sudan",
//       continent: "Africa",
//     },
//     {
//       name: "France",
//       continent: "Europe",
//     },
//   ])
// );

// function countryNameCapital(a) {
//   return a;
// }
// let countryName = "";
// test.forEach((e) => {
//   return (countryName += e.name.toUpperCase() + "\n");
// });
// console.log(countryName);

function africaCountry(a) {
  return [a];
}
let africaCountryResult = "";

test.forEach((e) => {
  if (e.continent === "Africa") {
    return [(africaCountryResult += {continent} =  e.continent + {name12} = e.name)];
  }
});
console.log([africaCountryResult]);
