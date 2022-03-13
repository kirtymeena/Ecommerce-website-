import React,{useEffect,useState} from 'react'
import { Link,useLocation } from 'react-router-dom'
import '../components/slider.css'
import { useParams } from 'react-router-dom';
import { axiosRequest } from '../apiCalls'
import axios from 'axios';

const Products = () => {
const [products,setProducts] = useState([])
   const {gender,category} = useParams()
   const location = useLocation()
   const cat =location.pathname.split("/")[1]
   const [filters,setFilter] = useState({})
   const [filteredProducts,setFilteredProducts] = ([])

   
  

   useEffect(()=>{
        // axiosRequest.get(`/${gender}/${category}`).then(res=>{
        //     setProducts(res.data)
        // })
        const getProduct = async()=>{
            try{
                const filtering = await axios.get(`/products?category=${gender}&category=${category}`)
                setProducts(filtering.data)
            }catch(err){
                console.log(err)
            }
        }
      
    
        getProduct()
    //    console.log(products.filter(p=>p.size.includes(filters.size)).map(prod=>console.log(prod)))

        
   },[location.pathname,filters])

   

   const handleFilter=(e)=>{
       const value = e.target.value
       setFilter({
           ...filters,
           [e.target.name]:value
       })
   }
 
  return (
    <div className="mt-20 flex flex-col">

        
        {/* price */}
        {/* <div className="form-control w-full max-w-xs">
            
            <select name="size" className="select select-bordered select-xs w-32" onChange={handleFilter}>
                <option disabled selected>Size</option>
                <option value="XS">XS</option>
                <option valye="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div> */}
        {/* <div className="form-control w-full max-w-xs">
            
            <select name="sort" className="select select-bordered select-xs w-32" onChange={handleFilter}>
                <option disabled selected>Sort:</option>
                <option value="newest">Newest</option>
                <option valye="desc">DESC</option>
                <option value="asc">ASC</option>
                
            </select>
        </div> */}
        
     
        
       
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