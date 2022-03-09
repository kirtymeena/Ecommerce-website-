import React,{useEffect,useState} from 'react'
import { Link,useLocation } from 'react-router-dom'
import '../components/slider.css'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { axiosRequest } from '../apiCalls'

const Products = () => {
const [products,setProducts] = useState([])
   const {gender,category} = useParams()
   const location = useLocation()
  
  

   useEffect(()=>{
        axiosRequest.get(`/${gender}/${category}`).then(res=>{
            setProducts(res.data)
        })
        
   },[location.pathname])
  return (
    <div className="mt-12 flex flex-col">

        
        {/* price */}
        <div className="form-control w-full max-w-xs">
            
            <select className="select select-bordered select-xs w-32">
                <option disabled selected>Price</option>
                <option>Rs. 300 to 400</option>
                <option>Rs. 500 to 700</option>
                <option>Rs. 800 to 1000</option>
            </select>
        </div>
        
     
        
       
        <div className="flex flex-wrap mt-8 pl-24 relative ">
            
        { products.map(product=>
            <div className='mx-12 mt-8' key={product._id}>
                    
               
            <Link to={`/product/${product._id}`} ><img src={product.img[0]} alt="product" className="object-contain w-48 h-54 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-x-150 hover:scale-y-150 hover:duration-300 "/>

            <div className="pl-2">
                <p className=" font-semibold">{product.title} </p>
                <p className="font-medium">Rs. {product.price} <span className="pl-2 text-sm font-light line-through">{product.originalPrice? `Rs. ${product.originalPrice}`:""}</span></p>
                <p className="font-bold text-xs text-orange-600">{product.msg?`${product.msg}`:""}</p>
            </div>
            </Link>
    </div> 
              )}
        </div>
        
    </div>
  )
}

export default Products