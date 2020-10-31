const word = new Array("hello", "lets", "find", "the", "word", "length");

const myFunction = (item, index, arr) => {
  arr[index] = item.length;
};
word.forEach(myFunction);
console.log(word);
