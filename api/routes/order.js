const router = require('express').Router()
const Order = require('../models/order');


//add order
router.post("/",async(req,res)=>{
    const newOrder = new Order(req.body)

    try{
        await newOrder.save()
        res.status(200).json(newOrder)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

});


//get all order of user
router.get("/find/:userId",async(req,res)=>{
    try{
        const Orders = await Order.find({userId:req.params.userId});
        res.status(200).json(Orders);

    }catch(err){
        res.status(500).json(err)
    }
});

//update order
router.put("/:id",async(req,res)=>{
  
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})

        res.status(200).json(updatedOrder)
    }catch(error){
        res.status(500).json(error)
    }
});


//get all orders of all user--only admin
router.get("/", async(req,res)=>{
   

    try{
        const Orders=await Order.find()
        res.status(200).json(Orders)
    }catch(err){
        res.status(400).json(err)
    }
});

//delete all order -- by admin
router.delete("/:id",async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("order has been deleted!")
    }catch(error){
        res.status(500).json(error)
    }
});

//get income -- only admin
router.get("/income",async(req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const prevMonth = new Date(new Date().setMonth(date.setMonth(lastMonth.getMonth()-1)));

        try{

            const income = await Order.aggregate([
                {$match:{createdAt:{$gte:prevMonth}}},
                {
                    $project:{
                        month:{$month:"$createdAt"},
                        sales:"$amount"
                    },
                },
                {
                    $group:{
                        _id:"$month",
                        total:{$sum:"$sales"}
                    }
                }
            
            ])
            res.status(200).json(income)

        }catch(err){
            res.status(500).json(err)
        }
});

module.exports = router