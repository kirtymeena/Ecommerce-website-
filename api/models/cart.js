const mongoose =  require("mongoose")
const product = require("./product")
const user = require("./user")

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:"user",
        require:true,
       
    },
    products:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId,ref:"product"},
            quantity:{
                type:Number,
                default:1
            },

        }
    ]

},{timestamps :true})

module.exports = mongoose.model("cart",cartSchema)