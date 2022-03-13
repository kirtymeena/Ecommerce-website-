import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getCartProduct = createAsyncThunk("/cart/product",async({userId})=>{
    const response = await axios.get(`/cart/cart-product/${userId}`)
    return response.data
})

export const addcartProduct = createAsyncThunk("/cart/add",async({userId,productId,quantity,size,price})=>{
    const response = await axios.post("/cart/add",{
        "userId":userId,
        "products":[
            {
                "productId":productId,
                "quantity":quantity,
                "size":size,
                "price":price
            }
        ]
    })
    
    return response.data
})

export const CartSlice = createSlice({
    name:"cart",
    initialState: {
        cartProd: [],
        product:[],
        price: 0,
        status:null,
        totalProduct:0
  
    },
   
    
    extraReducers:{
    [addcartProduct.pending]:(state)=>{
        state.status = 'pending';
        
    },
    [addcartProduct.fulfilled]:(state,action)=>{
        state.cartProd.push(action.payload)
        state.totalProduct = state.cartProd.length
        
        state.status = 'success'
    },
    [addcartProduct.error]:(state)=>{
        state.status='error';
    }
},
// extraReducers2:{
//     [getCartProduct.pending]:(state)=>{
//         state.status = 'pending';
//     },
//     [getCartProduct.fulfilled]:(state,action)=>{
//         state.product = action.payload;
//         state.price+=action.payload.map(p=>p.products.productsId.map(prod=>parseInt(prod.price)))
//         state.totalProduct = action.payload.length
//         state.status = 'fulfilled'
        
//     },
//     [getCartProduct.error]:(state)=>{
//         state.status = 'error';
//     }
//     },
})
export default CartSlice.reducer