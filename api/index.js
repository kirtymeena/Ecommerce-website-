const express = require("express")
const app = express();
const userRoute = require('./routes/user')
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
// const orderRoute = require("./routes/order")
require("./mongodb/db")
const cors = require("cors")

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/users",userRoute)
app.use("/auth",authRoute)
app.use("/products",productRoute)
// app.use("/order",orderRoute)

 
app.listen(port,()=>{
    console.log(`server is up on ${port}`)
})