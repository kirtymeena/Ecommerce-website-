import React,{useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'


const ProductsList = ({filter}) => {
    const [products,setProducts] = useState([])
    const {gender,category} = useParams()

    useEffect(()=>{
        const getProduct = async()=>{
            try{
                const filtering = await axios.get(category?`/products?category=${gender}&category=${category}`:`/${gender}/${category}`)
                setProducts(filtering.data)
            }catch(err){
                console.log(err)
            }
        }
        
    
        getProduct()
    },[])


  return (
    <div>
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

export default ProductsList