const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write(
      '<body><form action="/success" method="POST">firstName:<input type="text" name="firstname"><br/>lastName</input><input type="text" name="lastname"></input><br/><button type="submit">submit</button></form></body>'
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/success" && req.method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
      console.log(body);
    });
    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      const parse1 = parsedData.replace("firstname", "");
      const parse2 = parse1.replace("lastname", "");
      const parse3 = parse2.replace("=", "");
      const parse4 = parse3.replace("&", "");
      const parse5 = parse4.replace("=", " ");
      const fileData = "My full name is " + parse5;

      fs.writeFile("PersonName.txt", fileData, (err) => {
        if (err) throw err;
        console.log("saved");
      });
    });
    res.statusCode = 201;
    res.write("success");
    res.end();
  }
});
server.listen(2000, () => {
  console.log("running on port 2000");
});
