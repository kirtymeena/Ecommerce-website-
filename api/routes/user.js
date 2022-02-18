const router = require('express').Router()
const User = require("../models/user")
const CryptoJS = require("crypto-js");



router.put("/:id",async(req,res)=>{
    if(req.body.password){
         req.body.password = CryptoJS.AES.encrypt(
             req.body.password,
             process.env.PASS_SEC
         ).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})

        res.status(200).json(updatedUser)
    }catch(error){
        res.status(500).json(error)
    }
})


router.delete("/:id",async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted!")
    }catch(error){
        res.status(500).json(error)
    }
})

//GET USER
// not working 
router.get("/find/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const{password,...others} = user._doc
        if(req.body.isAdmin){
            res.status(200).json(others);
        }
        res.status(400).json("Not Allowed!")
        

    }catch(err){
        res.status(500).json(err)
    }
});




module.exports = router
