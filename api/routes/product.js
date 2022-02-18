const router = require('express').Router()
const Product = require('../models/product');



//add products
router.post("/",async(req,res)=>{
    const newProduct = new Product(req.body)

    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }

})

//update products
router.put("/:id",async(req,res)=>{
  
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})

        res.status(200).json(updatedProduct)
    }catch(error){
        res.status(500).json(error)
    }
})


//delete products
router.delete("/:id",async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted!")
    }catch(error){
        res.status(500).json(error)
    }
})


//get product by id
router.get("/find/:id",async(req,res)=>{
    try{
        const products = await Product.findById(req.params.id);
        res.status(200).json(products);

    }catch(err){
        res.status(500).json(err)
    }
});

//GET all products
router.get("/", async(req,res)=>{
    const qNew = req.query.new //return latest product
    const qCategory = req.query.category //return product by category

    try{
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt:-1}).limit(1)
        }
        else if(qCategory){
            products = await Product.find({
                categories:{$in:[qCategory]
            },
        });
        }else{
            products = await Product.find();
        }
        
        res.status(200).json(products)

    }catch(err){
        res.status(400).json(err)
    }
})

module.exports = router