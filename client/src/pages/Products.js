import React from 'react'
import { products } from '../fakeData'
import { Link } from 'react-router-dom'
import '../components/slider.css'

const Products = () => {
  return (
    <div className="mt-12 flex flex-col">

        {/* filters */}
        <div className="flex flex-row">
            {/* gender */}
        <div className="form-control w-full max-w-xs ml-24">
            
            <select className="select select-bordered select-xs w-24">
                <option disabled selected>Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
        {/* price */}
        <div className="form-control w-full max-w-xs">
            
            <select className="select select-bordered select-xs w-32">
                <option disabled selected>Price</option>
                <option>Rs. 300 to 400</option>
                <option>Rs. 500 to 700</option>
                <option>Rs. 800 to 1000</option>
            </select>
        </div>
        {/* colors */}
        <div className="w-full max-w-xs flex flex-wrap">
        <p className='font-medium'>colors:</p>
        <div className='w-4 h-4 bg-rose-600 rounded-full mt-1 mx-2 border-[0.3px] border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-black rounded-full mt-1 mx-2 border border-slate-500  hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-gray-700 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-amber-700 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-green-800 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-sky-400 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-red-800 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-blue-900 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-fuchsia-600 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-orange-400 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-purple-400 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer' ></div>
        <div className='w-4 h-4 bg-white rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-blue-200 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
        <div className='w-4 h-4 bg-pink-600 rounded-full mt-1 mx-2 border border-slate-500 hover:cursor-pointer'></div>
      
        </div>
     
        </div>
       
        <div className="flex flex-wrap mt-8 pl-24 relative ">
        {products.map((product)=>
            <div className='mx-8 mt-8' key={product.id}>
            
               
                    <Link to="/"><img src={product.image} alt="product" className="object-contain w-44 h-50 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-x-150 hover:scale-y-150 hover:duration-300 "/>

                    <div className="pl-2">
                        <p className=" font-semibold">{product.Title}</p>
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