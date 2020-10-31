const mongoose =require("mongoose");
const Schema=mongoose.Schema;
const productSchema= new Schema({
  product:String,
  name:String,
  price:Number,
  brand:String,
})
module.exports=mongoose.model("product",productSchema);
// //const product = [];
// const fs = require("fs");
// const path = require("path");
// class Product {
//   constructor(prod) {
//     this.name = prod.name;
//     this.product = prod.product;
//     this.brand = prod.brand;
//     this.price = prod.price;
//     this.image = prod.image;
//   }
//   store() {
//     //product.push(this);
//     this.id = Math.random().toString();
//     const filePath = path.join(__dirname, "../data", "product.json");
//     fs.readFile(filePath, (err, data) => {
//       let product = [];
//       if (!err) {
//         product = JSON.parse(data);
//       }
//       product.push(this);
//       fs.writeFile(filePath, JSON.stringify(product), (err) => {
//         console.log("Error:" + err);
//       });
//     });
//   }
//   static fetch(cb) {
//     const filePath = path.join(__dirname, "../data", "product.json");
//     //readfile is a asyn function and the call back function go into the event loop and not executed immediatly
//     //that's why in controller we where not getting data in console
//     fs.readFile(filePath, (err, data) => {
//       //we can't return any think from call back function as it get into event loop
//       //so we can callback from it using function parameter cb
//       if (err) {
//         cb([]); //cd callback function from controller and taking the parameter as empty error and taking the data to product parameter in controller callback function
//       }
//       cb(JSON.parse(data)); //same as above
//     });
//   }
//   static Cart(id) {
//     let product = [];
//     const filePath = path.join(__dirname, "../data", "product.json");
//     const filePath2 = path.join(__dirname, "../data", "cart.json");
//     fs.readFile(filePath2, (err, data) => {
//       if (!err) {
//         product = JSON.parse(data);
//       }
//     });
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         console.log("Error:" + err);
//       }
//       const data2 = JSON.parse(data);
//       const product2 = data2.filter((p) => p.id == id);
//       product.push(product2);
//       fs.writeFile(filePath2, JSON.stringify(product), (err) => {
//         console.log("Error:" + err);
//       });
//     });
//   }
//   static fetchCart(cb) {
//     const filePath = path.join(__dirname, "../data", "cart.json");
//     //readfile is a asyn function and the call back function go into the event loop and not executed immediatly
//     //that's why in controller we where not getting data in console
//     fs.readFile(filePath, (err, data) => {
//       //we can't return any think from call back function as it get into event loop
//       //so we can callback from it using function parameter cb
//       if (err) {
//         cb([]); //cd callback function from controller and taking the parameter as empty error and taking the data to product parameter in controller callback function
//       }
//       cb(JSON.parse(data)); //same as above
//     });
//   }

//   static fetchById(id, cb) {
//     const filePath = path.join(__dirname, "../data", "product.json");
//     //readfile is a asyn function and the call back function go into the event loop and not executed immediatly
//     //that's why in controller we where not getting data in console
//     fs.readFile(filePath, (err, data) => {
//       //we can't return any think from call back function as it get into event loop
//       //so we can callback from it using function parameter cb
//       if (err) {
//         cb([]); //cd callback function from controller and taking the parameter as empty error and taking the data to product parameter in controller callback function
//       }
//       const data2 = JSON.parse(data);
//       const product = data2.filter((p) => p.id == id);
//       cb(product); //same as above
//     });
//   }
// }

// module.exports = Product;
