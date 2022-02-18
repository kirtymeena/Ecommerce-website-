const router = require('express').Router()
const User = require("../models/user")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")



//register
router.post("/register",async(req,res)=>{
   
    const newUser = new User({
        username:req.body.username,
        email: req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    })
    try{
        res.status(201).send(newUser)
        await newUser.save()
    }catch(error){
        res.status(500).send(error)
        console.log(error)
    }
})


//login
router.post("/login", async(req,res)=>{

    try{
        const user = await User.findOne({username:req.body.username})
        const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
 
        if(!user || originalPassword!==req.body.password ){
         
            return res.status(401).json({
                status:"error",
                error:"Wrong Credentials"
            })
        }
        const accessToken = jwt.sign({
            id:user._id,
        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
        )
 
        const{password,...others} = user._doc
        
        res.status(200).json({others,accessToken})
    }catch(err){
        res.status(500).json(err)
    }
 })
 module.exports = router
