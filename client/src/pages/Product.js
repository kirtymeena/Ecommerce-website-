import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getProductById } from '../redux/productSlice'
import { addcartProduct } from '../redux/cartSlice'
import { MdShoppingCart} from "react-icons/md";
import { MdStar} from "react-icons/md";
import { MdCheckCircleOutline,MdLoyalty,MdOutlineMaximize,MdAdd } from "react-icons/md";
import { FiRefreshCcw} from "react-icons/fi";

const Product = () => {
    const params = useParams()
    const dispatch=useDispatch() 
    const id = params.id
    const product = useSelector(state=>state.products.entities)
    const[selectedSize,setSelectedsize] = useState(false)
    const[size,setSize] = useState('')
    const[price,setPrice] = useState(0)
    const[quantity,setQuantity]=useState(1)
    

    
 
    
    const addProductToCart = ()=>{
      const data={
          userId:sessionStorage.getItem("id"),
          productId:product._id,
          quantity:quantity,
          size:size,
          price:price
      }
      if(size!==''){
        dispatch(addcartProduct(data))
      }
      else{
        console.log("select size")
      }
     
      
     
    }
   
    

    useEffect(()=>{
      const getProduct = ()=>{
        const data={id:id}
        dispatch(getProductById(data))
        
      }
     
      getProduct();
      // console.log(product)
    },[dispatch,id])

    const selectSize = (e)=>{
        setSelectedsize(true)
        setPrice(product.price)
        setSize(e.target.textContent)
        
    }

    const increaseQuantity = ()=>{
        setQuantity(quantity+1)
    }
    const decreaseQuantity = ()=>{
        setQuantity(quantity-1)
    }
   
  return (
    <div className="flex flex-row mt-20">
        <div className="flex flex-wrap w-[80rem] ">
          {product.img!==undefined && product.img.map(p=> 
            
                <div className="px-[1px]" key={p}>
                  <img src={`${p}`} className="w-[22rem]"/>
                </div>    
                )}
                 
        </div>
        <div className="px-20 w-[48rem] ">
         
            <h1 className="text-3xl font-semibold" >{product.title!==undefined && product.title.toUpperCase()}</h1>
            <div className='mt-4'>
            <div className='flex flex-row'>
              <p className="text-xl font-semibold text-orange-600">{product.discount}% OFF  </p>
              <div className="text-xl font-semibold pb-4 ml-52">{product.rating===0?<p className="text-sm font-light">no rating</p> : product.rating}</div>
              <div><MdStar size={25} style={{color:"#fb923c"}} className="pt-2"/></div>
              </div>
             
              <p className="text-xl font-semibold text-slate-600 pb-4">₹ {product.price} <span className='line-through font-light px-4'>₹ {product.originalPrice}</span></p>
              
               
              
              
              <hr/>
              <p className="text-xl font-semibold mt-4">SELECT SIZE</p>
              <div className="flex flex-wrap mb-4">
              {product.size!==undefined && product.size.map(s=>
              <div key={s} onClick={selectSize}  className={`${selectedSize && s===size?"border-rose-400":"border-2"} border-2 cursor-pointer rounded-full mx-2 w-12 h-12 mt-4  text-center pt-2 hover:border-rose-400`}>
                  {s}
              </div>  
              )}
              </div>
             <div className="flex flex-row">
              <div className="mt-12 mb-4">  
                <button className="btn btn-accent btn-wide btn-lg gap-2 " onClick={addProductToCart}>ADD TO CART <MdShoppingCart size={30}/></button>
              </div>

              <div className='mt-14 mb-4 ml-4'>
              <button className="btn btn-sm btn-circle btn-outline pt-2" onClick={decreaseQuantity}>
                  <MdOutlineMaximize/>             
               </button>
                             
              </div>
              <div className='mt-14 mb-4 ml-4 mr-4 text-xl font-semibold'>{quantity}</div>
              <div className='mt-14 mb-4'>
              <button className="btn btn-sm btn-circle btn-outline " onClick={increaseQuantity}>
                <MdAdd/>
                </button>
                </div>
              </div>
            </div>
            <hr/>
            <h2 className='text-2xl font-semibold mt-4'>PRODUCT DETAILS</h2>
            <p className="mt-2 mb-4">{product.desc}</p>
            <hr/>
            <div className="flex flex-row">
              <div className="mt-4">
              <MdCheckCircleOutline size={30}/>
              </div>
              <div className="pl-2">
                 <h2 className="text-xl mt-4 font-semibold"> 100% original</h2>
              </div>
              </div>
              <div className="flex flex-row">
                <div className="mt-4">
                <FiRefreshCcw size={30}/>
                </div>
                <div className='pl-2'>
                <h2 className="text-xl mt-4 font-semibold">Easy 30 days return and exchange</h2>
                </div>
                </div>
              <div className="flex flex-row">
                <div className="mt-4">
                <MdLoyalty size={30}/>
                </div>
                <div className='pl-2'>
                <h2 className="text-xl mt-4 font-semibold">Special offer {product.discount}% OFF</h2>
                </div>
                </div>
                
            </div>
        </div>
        
       

  )
}


export default Product