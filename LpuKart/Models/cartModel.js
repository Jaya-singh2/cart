const mongoose =require("mongoose");
const Schema=mongoose.Schema;
const productSchema= new Schema({
  product:String,
  name:String,
  price:Number,
  brand:String,
})
module.exports=mongoose.model("cart",productSchema);