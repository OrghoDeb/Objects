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

console.log("\nTask 5 = Creating Javascript objects one");
function objCreator(a) {
  return { ["key"]: a };
}
console.log(objCreator("a"));

console.log("\nTask 6 = Creating Javascript objects two");
function objectCreator2(a, b) {
  return { [a]: b };
}
console.log(objectCreator2("a", "b"));

console.log("\nTask 7 = Creating JavaScript Object three");
function objectCreator3(a, b) {
  return Object.fromEntries(a.map((key, index) => [key, b[index]]));
}
console.log(objectCreator3(["a", "b", "c"], [1, 2, 3]));

// console.log(`\nTask 8 = Extracting Infos from objects`);
// function myFunction(obj) {
//   return {
//     ["size"]: obj.size.toString().concat("cm"),
//     ["weight"]: obj.weight.toString().concat("kg"),
//     ...obj,
//   };
// }
// console.log(
//   myFunction({ fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 })
// );

console.log("\nTask 9 = Sum object values");
function ObjectSum(a) {
  return Object.values(a).reduce((c, d) => c + d, 0);
}
console.log(ObjectSum({ a: 1, b: 2, c: 3 }));

console.log("\nTask 10 = Remove a property from an object");
function keyRemover(a) {
  let { b, ...obj } = a;
  return obj;
}
console.log(keyRemover({ a: 1, b: 7, c: 3 }));

// console.log("\nTask 11 = Merge two objects with matching keys");
// function objMerge(x, y) {
//   let { b, ...obj } = y;
//   return { x, ...obj, d: b };
// }
// console.log(objMerge(({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })));

console.log("\nTask 12 = Multiply all object values by x");
function objMutiply(a, b) {
  return Object.entries(a).reduce(
    (old1, new1) => ({ ...old1, [new1[0]]: new1[1] * b }),
    {}
  );
}
console.log(objMutiply({ a: 1, b: 2, c: 3 }, 3));

console.log("\nTask 13 = Swap object keys and values");
function objSwaps(a) {
  return Object.fromEntries(Object.entries(a).map(([e, i]) => [i, e]));
}
console.log(objSwaps({ z: "a", y: "b", x: "c", w: "d" }));

// console.log("\nTask 14 = Replace empty strings in object with null values");
// function replaceEmptyWithNull(a) {
//   return Object.fromEntries(
//     Object.entries(a).map(([e]) => e.replace([""], [null]))
//   );
// }
// console.log(replaceEmptyWithNull({ a: "a", b: "b", c: "" }));

console.log("\nTask 15 = Extracting information from objects");
function extractInfo(obj) {
  return {
    ["size"]: obj.size.toString().concat("cm"),
    ["weight"]: obj.weight.toString().concat("kg"),
    ...obj,
  };
}
console.log(
  extractInfo({ fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 })
);

console.log("\nTask 16 = Add property to each object in array");
function propertyAdder(a, b) {
  return a.map((e) => {
    return { ...e, continent: b };
  });
}
console.log(
  propertyAdder(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
);
