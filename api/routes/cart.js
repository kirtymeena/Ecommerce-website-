const router = require('express').Router()
const Cart = require('../models/cart')
const Product = require('../models/product')
const User = require('../models/user')


router.post("/add",async(req,res)=>{
    try{
        
        const cart = new Cart(req.body)
      
        await cart.save()
        res.status(200).json(cart)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
})

router.put("/:id",async(req,res)=>{
    try{
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}

        )
        res.status(200).json(updateCart);
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


router.get("/cart-product/:userId",async(req,res)=>{
    
 
    try{
        
       
        const cart = await Cart.find({"userId":req.params.userId}).populate({
            path:'products',
            populate:{
                path:"productId",
                model:"Product"
            }
        }).exec()
        
        res.status(200).json(cart)
    }catch(err){
        console.log(err)
        res.status(404).json(err)
    }
})

// router.delete("/cart/:cartId",async(req,res)=>{
//     try{
//         const cart = Cart.findByIdAndDelete(req.params.cartId)
//         if(!cart){
//             res.status(404).json("cartId not found")
//         }
//         res.status(200).json("Product Has been deleted from cart successfully!")
//     }catch(err){
//         res.status(400).json(err)
//     }

// })

module.exports = router