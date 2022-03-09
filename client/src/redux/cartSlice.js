import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getCartProduct = createAsyncThunk("/cart/product",async({userId})=>{
    const response = await axios.get(`/cart/cart-product/${userId}`)
    return response.data
})

export const addcartProduct = createAsyncThunk("/cart/add",async({userId,productId,quantity})=>{
    const response = await axios.post("/cart/add",{
        "userId":userId,
        "products":[
            {
                "productId":productId,
                "quantity":quantity
            }
        ]
    })
    return response.data
})

export const CartSlice = createSlice({
    name:"cart",
    initialState:{
    cartProd:[],
    status:null,
    error:false,
    toggle:false
    },
    reducers:{},
    extraReducers:{
    [getCartProduct.pending]:(state)=>{
        state.status = 'pending';
        state.error=false
    },
    [getCartProduct.fulfilled]:(state,action)=>{
        state.cartProd = action.payload;
        state.status = 'fulfilled'
    },
    [getCartProduct.error]:(state)=>{
        state.status = 'error';
        state.error = true
    }
    },
    [addcartProduct.pending]:(state)=>{
        state.status = 'pending';
        state.error = false;
        
    },
    [addcartProduct.fulfilled]:(state,action)=>{
        state.cartProd = action.payload
        state.toggle = true
        state.status = 'success'
    },
    [addcartProduct.error]:(state)=>{
        state.status='error';
        state.error=true
    }
    
})
export default CartSlice.reducer