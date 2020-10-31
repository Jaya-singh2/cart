const http = require("http");
const data = require("./Module.js");
const fs = require("fs");
const server = http.createServer((req, res) => {
  fs.writeFile("resultLog.txt", data(), (err) => {
    if (err) throw err;
    console.log(data);
  });
  res.write("hello");
  res.end();
});
server.listen(5000, () => {
  console.log("running on port 5000");
});
