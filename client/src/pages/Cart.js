import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { axiosRequest2 } from '../apiCalls'
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from 'react-redux';

const Cart = () => {
  const[product,setProduct] = useState([])
  const [total,setTotal]=useState(0)
  const[quantity,setQuantity] = useState(0)
  // const {cartProd,totalProduct} = useSelector(state=>state.cart)

  useEffect(()=>{
    const getProd = ()=>{
      axiosRequest2.get(`/cart-product/${sessionStorage.getItem("id")}`).then(res=>{
        setProduct(res.data)
        res.data.map(p=>p.products.map(prod=>setTotal(prev=>prev+prod.productId.price)))
        res.data.map(p=>p.products.map(prod=>setQuantity(prod.quantity)))

        
      })

    }
  //  console.log(cartProd)
  //  console.log(totalProduct)
    getProd()
    console.log(quantity) 
  },[])
  return (
    <div className="flex flex-row  mt-12 relative">
      
       <div className="w-[40rem] ml-12">
         {/* {title.map(t=>console.log(t.price))}  */}
         {product && product.map(a=>a.products.map(p=>
          <div className="flex flex-col" key={p._id}>
            <div className="flex flex-row">
              {p.productId.inStock===false?
              <div className='absolute mt-[6rem] ml-4  text-orange-700 rotate-45 font-bold text-xl z-40'>out of stock</div>:""}
                <div className="mt-12">
                 <img src={p.productId.img[0]} className={`w-[8rem] h-[10rem] ${p.productId.inStock===false?"opacity-50":""}`}/>
                </div>
                    
                <div className="mt-8 ml-2">
                  <h1 className="text-xl font-semibold mt-8">{p.productId.title}</h1>
                  <p className='text-lg font-semibold text-slate-600 mt-2'>₹ {p.productId.price} <span className="line-through font-light">₹ {p.productId.originalPrice}</span></p>
                  <p className="font-semibold text-lg text-slate-600 mt-2"> size: {p.size} <span className="pl-8">quantity: {p.quantity}</span></p> 
                  {p.productId.inStock?<p className="text-orange-500 mt-2">In Stock</p>:<p className="text-orange-500">Out of stock</p>}
                  
                  <button className="btn btn-md gap-2 mt-8">Remove Item <MdDeleteOutline size={20}/></button>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className="right-[30rem] left-[50rem] top-28 pb-20 rounded-lg border-2 w-[25rem] h-[17rem]  fixed bg-slate-100">
          <p className="pl-32 text-xl font-bold mb-12 shadow-md bg-amber-500 rounded-full">ORDER SUMMARY</p>
          <div className="flex flex-row">
                <div className="ml-8 font-semibold text-lg">
                    Subtotal: 
                </div>
                <div className="ml-[13rem] font-semibold text-lg">
                ₹ {total*quantity}
                </div>
          </div>
          <div className="flex flex-row pt-2">
                <div className="ml-8 font-semibold text-lg">
                    Delivery: 
                </div>
                <div className="ml-[14rem] font-semibold text-lg">
                ₹ {20}
                </div>
          </div>
          <div className="flex flex-row pt-2">
                <div className="ml-8 font-semibold text-lg">
                    Discount: 
                </div>
                <div className="ml-[13rem] font-semibold text-lg">
                    - ₹ {20}
                </div>
          </div>
          <div className="flex flex-row pt-2">
                <div className="ml-8 font-semibold text-lg">
                    Total: 
                </div>
                <div className="ml-[15rem] font-semibold text-lg">
                ₹ {total*quantity}
                </div>
          </div>
          <button className="btn btn-wide inline-block ml-20 mt-4 mb-2">CHECK OUT</button>
      </div> 
    </div>
  )
}

export default Cart