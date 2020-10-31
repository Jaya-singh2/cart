const object = {
  4: "fourth",
  5: "fifth",
  1: "first",
  2: "second",
  3: "third",
};

const key = Object.keys(object).map(function (key) {
  return Number(key);
});
const value = Object.keys(object).map(function (key) {
  return object[key];
});

console.log([key, value]);
