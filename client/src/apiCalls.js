import axios from 'axios'


export const axiosRequest  = axios.create({
    baseURL:"/products"
}) 
export const axiosRequest2  = axios.create({
    baseURL:"/cart"
}) 
    
