import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'





//get products by category
export const getProductByCat = createAsyncThunk("/products/cat",async()=>{
    const res = await axios.get("/products/summer/")
    return res.data
});

//GET PRODUCT BY ID
export const getProductById = createAsyncThunk("/products/id",async(data)=>{
    
    const response = await axios.get(`/products/find/${data.id}`)
    return response.data
})

export const ProductSlice = createSlice({
   
 
    name:"products",
    initialState:{
        entities:[],
        status:null,
        error:false
    },
   
    
    extraReducers:{
        [getProductById.pending]:(state)=>{
            state.status = 'pending';
            state.error=false;
        
            
        },
        [getProductById.fulfilled]:(state,action)=>{
           state.entities = action.payload
            state.status= 'success';
           
            
          
        },
        [getProductById.rejected]:(state)=>{
            state.error=true;
            state.status='error'
        }
    }
    

})

export default ProductSlice.reducer