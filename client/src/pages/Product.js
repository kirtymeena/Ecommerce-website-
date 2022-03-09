import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getProductById } from '../redux/productSlice'
import { addcartProduct, getCartProduct } from '../redux/cartSlice'
import { MdShoppingCart} from "react-icons/md";
import { MdStar} from "react-icons/md";

const Product = () => {
    const params = useParams()
    const dispatch=useDispatch() 
    const id = params.id
    const product = useSelector(state=>state.products.entities)
    const cart = useSelector(state=>state.cart.cartProd);
    
 
    
    const addProductToCart = ()=>{
      const data={
          userId:sessionStorage.getItem("id"),
          productId:product._id,
          quantity:1
      }
      dispatch(addcartProduct(data))
     
      
    }

    useEffect(()=>{
      const getProduct = ()=>{
        const data={id:id}
        dispatch(getProductById(data))
        
      }
      const getCart = ()=>{

      
      const data = {userId:sessionStorage.getItem("id")}
      dispatch(getCartProduct(data))
      }
      getProduct();
      getCart();
      // console.log(cart)
      
        
    },[dispatch,id])
    
  return (
    <div className="flex flex-row mt-8">
        <div className="flex flex-wrap w-[80rem] ">
          {product.img!==undefined && product.img.map(p=> 
            
                <div className="px-[1px]" key={p}>
                  <img src={`${p}`} className="w-[22rem]"/>
                </div>    
                )}
                 
        </div>
        <div className="px-20 w-[48rem]">
            <h1 className="text-3xl font-semibold" >{product.title!==undefined && product.title.toUpperCase()}</h1>
            <div className='mt-4'>
            <div className='flex flex-row'>
              <p className="text-xl font-semibold text-orange-600">{product.discount}% OFF  </p>
              <div className="text-xl font-semibold pb-4 ml-52">{product.rating===0?<p className="text-sm font-light">no rating</p> : product.rating}</div>
              <div><MdStar size={25} style={{color:"#fb923c"}} className="pt-2"/></div>
              </div>
             
              <p className="text-xl font-semibold text-slate-600 pb-4">Rs. {product.price} <span className='line-through font-light px-4'>Rs. {product.originalPrice}</span></p>
              
               
              
              
              <hr/>
              <p className="text-xl font-semibold mt-4">SELECT SIZE</p>
              <div className="flex flex-wrap mb-4">
              {product.size!==undefined && product.size.map(s=>
              <div key={s} className="border-2 rounded-full mx-2 w-12 h-12 mt-4  text-center pt-2 hover:border-rose-400">
                  {s}
              </div>
              )}
             
              <div className="mt-12">
                
              <button className="btn btn-accent btn-wide btn-lg gap-2 " onClick={addProductToCart}>ADD TO CART <MdShoppingCart size={30}/></button>
             
              </div>
            </div>
            <hr/>
            <h2 className='text-2xl font-semibold mt-4'>PRODUCT DETAILS</h2>
            <p className="mt-2">{product.desc}</p>
            </div>
        </div>
        
       
    </div>
  )
}


export default Product