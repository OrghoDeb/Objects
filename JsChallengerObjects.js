console.log("Task 1 = Accessing object properties one with one argument");
function object1(a) {
  return a.country;
}
console.log(object1({ continent: "Asia", country: "Japan" }));

console.log("\nTask 2 = Accessing object properties two with one argument");
function object2(b) {
  return b["prop-2"];
}
console.log(object2({ one: 1, "prop-2": 2 }));

console.log("\nTask 3 = Accessing object properties three with one argument");
function object3(c, d) {
  return Object.values(c[d]).join("");
}
console.log(object3({ continent: "Asia", country: "Japan" }, "continent"));

console.log(
  "\nTask 4= Check if property exists in object and is truthy with two arguments"
);
function objectChecker(obj, cond) {
  if (obj[cond] > 1) {
    return true;
  } else {
    return false;
  }
}
console.log(objectChecker({ a: 1, b: undefined, c: 3 }, "b"));

console.log("\nTask 5 = Creating Javascript objects one with one argument");
function objCreator(f) {
  return Object.create(f);
}
console.log(objCreator("a"));

console.log("\nTask 6 = Sum object values");
function valueSummation(...x) {
  return Object.values(...x).sum();
}
console.log(valueSummation({ a: 1, b: 2, c: 3 }));
