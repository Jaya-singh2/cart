//const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const path = require("path");
const bodyParser = require("body-parser");
const adminRouter = require("./routers/admin");
const userRouter = require("./routers/user");
const KartHome = require("./routers/kartHome");
const cart = require("./routers/cart");
const welcome=require("./routers/Welcome");
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(express.static("public")); 
//app.use(express.static("public")); 
app.use("/home", KartHome);
app.use("/admin", adminRouter.routes);
app.use("/user", userRouter);
app.use("/cart", cart);
app.use(welcome);
app.use((req, res, next) => {
  res.render("error");
});
//const server = http.createServer(app);
mongoose.connect("mongodb://localhost:27017/collection2",{ useNewUrlParser: true,useUnifiedTopology: true}).then((result)=>{
  app.listen(5000);
  console.log("running on port 5000 and connected with db.....");
}).catch((error)=>{
  console.log("error");
})

