import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const login = createAsyncThunk("user/login",async(data)=>{
    const {username,password} = data

    const response = await axios.post("/auth/login",{
        "username":username,
        "password":password
    })
    return response.data
})

export const UserSlice = createSlice({
    name:"user",
    initialState:{
        value:[],
        status:null
    },
    extraReducers:{
        [login.pending]:(state)=>{
            state.status=  'pending'
        },
        [login.fulfilled]:(state,action)=>{
            state.value = action.payload;
            state.status = 'success'
        },
        [login.rejected]:(state)=>{
            state.status='error'
        }
    }
})
export default UserSlice.reducer