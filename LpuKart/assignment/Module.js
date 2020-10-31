const fs = require("fs");
const getdata = () => {
  var text = fs.readFileSync("userdata.txt", "utf8");
  return text;
};
console.log(getdata);

module.exports = getdata;
