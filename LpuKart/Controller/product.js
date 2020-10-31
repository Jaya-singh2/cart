const Product = require("../Models/productModel");
const Cart = require("../Models/cartModel");
const User = require("../Models/userModel");
const bcrypt=require("bcryptjs");
const arr=[];
const databaseError=[];
const loginError=[];
const { body, validationResult } = require('express-validator');
exports.postWelcome = (req,res)=>{
  res.render("Welcome",{
    title:"welcome Page",
  });
}
exports.postRegister=(req,res)=>{
  res.render("RegisterPage",{
    error:arr,
  });
}
exports.getRegister=(req,res)=>{
  const { username, email, password}=req.body;
const errors=validationResult(req);
if(!errors.isEmpty())
{
  //res.send({error:errors.array()});
  res.render("RegisterPage",{
    error:errors.array(),
  })
}
else
{
  User.findOne({email:email}).then(user=>{
    if(user)
    {
      databaseError.push({msg:"that email is allready registered"});
      res.render("RegisterPage",{
        error:databaseError,
      });
    }
    else
    {
      const user=new User({
        username:username,
        password:password,
        email:email,
      });
      bcrypt.genSalt(10,(err,salt)=> bcrypt.hash(user.password,salt,(err,hash)=>{
        if(err) throw err;
        user.password=hash;
        user.save().then((result)=>{
          console.log("data saved");
          console.log(user);
          res.redirect("/register");
        }).catch((err)=>{
          console.log("error");
        })

      }))
      
    }
  })
} 
}
exports.postLogin=(req,res)=>{
  res.render("LoginPage",{
    error:arr,
  });
}
exports.getLogin=(req,res)=>{
  const{username,password}=req.body;
  User.findOne({username:username}).then(result=>
    {
      if(!result)
      {
      
      loginError.push({msg:"you have not registered"});
      res.render("LoginPage",{
        error:loginError,
      });
      // res.send({msq:result,
      // password:result.password});

    }
    
        bcrypt.compare(password, result.password, (err,done)=>{
          if(err)
          {
            
            loginError.push({msg:"password is wrong"});
            res.render("LoginPage",{
            error:loginError,
            });
          }
          else
          {
            res.render("KartHome");
          }
        })
      
    })
  
}
exports.getHomePage = (req, res) => {
  res.render("kartHome");
};
exports.getAddProductPage = (req, res) => {
  res.render("AddProduct", {
    title: "add - product",
    error:null,
    arr:arr,
 
  });
};

exports.getAdminPage = (req, res) => {
  res.render("adminHomePage", {
    title: "admin",  
  });
};
exports.postAddProductPage = (req, res) => {
const {product, name, price, brand, image}=req.body;
const errors=validationResult(req);
console.log(errors.array());
if(!errors.isEmpty())
{
  console.log(errors.array());
  //res.send({error:errors.array()});
  res.render("AddProduct",{
    title: "add - product",
    error:errors.array(),
    arr:arr,
  })
}
else
{
const products=new Product({
  product:product,
  name:name,
  price:price,
  brand:brand,
  image:image,
});
products.save().then((result)=>{
  console.log("data saved");
  res.redirect("/admin/addProduct");
}).catch((err)=>{
  console.log("error");
})
} 
};

exports.addInCart = (req,  res) => {
  const id=req.params.Id;
  Product.findById(id).then((result) => {
    const carts=new Cart({
      product:result.product,
      name:result.name,
      price:result.price,
      brand:result.brand,
      image:result.image,
    })
    carts.save().then((result)=>{
      console.log("data saved in cart");
      res.redirect("/user")
    }).catch((err)=>{
      console.log("error");
    })
  });
  
};

exports.showProduct = (req, res) => {
  Product.find({}).then((product) => {
    res.render("store", {
      title: "store display",
      products: product,
    });
  });
};

exports.showCart = (req, res) => {
  Cart.find({}).then((product) => {
    console.log("cart details:", product);
    res.render("cart", {
      title: "store display",
      products: product,
    });
  });
};

exports.removeData = (req, res, next)=>{
  const id=req.params.id;
  Cart.deleteOne({_id:id}).then((result)=>{ 
        console.log("data saved");
        res.redirect("/cart/product");
    });
    
}
exports.fetchProduct = (req, res, next) => {
  const id=req.params.productId;
  Product.findById(id).then((product) => {
    res.render("idProduct", {
      title: "id related product",
      products: product,
    });
  });
  
};
exports.updateProductPage = (req, res, next)=>{
  Product.find({}).then((product) => {
    res.render("updateProduct", {
      title: "store display",
      products: product,
    });
  });

}
exports.updateForm = (req, res, next)=>{
  res.render("UpdateForm", {
    title: "updateform",
    id:req.params.id,
   
  });
}
exports.updateProduct = (req, res, next)=>{
  const id=req.params.ID;
    Product.findByIdAndUpdate({_id:id},{$set:{product:req.body.product, price:req.body.price,brand:req.body.brand}}).then((result)=>{
      result.save().then((result)=>{
        console.log("data saved");
        res.redirect("/admin/updateProduct");
      }).catch((err)=>{
        console.log("error");
      })
    });
    
}

exports.removeStoreData = (req, res, next)=>{
  const id=req.params.id;
  Product.deleteOne({_id:id}).then((result)=>{ 
        console.log("data saved");
        res.redirect("/admin/updateProduct");
    });
    
}


