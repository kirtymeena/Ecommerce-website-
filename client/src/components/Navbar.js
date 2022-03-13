import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {isMobile} from 'react-device-detect';
import Banner from './Banner';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';





const Navbar = () => {

   
    const user = sessionStorage.getItem("id")
    const cart = useSelector(state=>state.cart.cartProd)
    const navigate = useNavigate()


    

     
    useEffect(()=>{
     
      // const getCart = ()=>{
      //   console.log("in")
      //   const data={
      //     userId:sessionStorage.getItem("id")
      //   }
      //   dispatch(getCartProduct(data))
      // }
      // getCart()
      
      // console.log("prod",product.map(p=>p.products.map(prod=>prod)))
      // console.log(cart)
    
    },[])
     
    const Logout=()=>{
      sessionStorage.clear()
      navigate("/")
    }
  return (
  <div>
    <div className="navbar bg-base-100 shadow-xl rounded-box fixed z-50 ">
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl font-extrabold">KSHOP</Link>   

    {/* women dropdown */}
            <div className="dropdown">
                <button id="tabs-1-tab-1" className={`px-4 text-gray-900 border-transparent whitespace-nowrap py-4  border-b-2  font-medium hover:underline ${isMobile?"text-sm":"text-base"}`} aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>

                <ul tabIndex="0" className={`p-2 shadow menu dropdown-content bg-base-100 rounded-box ${isMobile ? "w-68 text-sm":"w-[40rem]"}`}>
            
                <div className={`flex  ${isMobile?"flex-col":"flex-row"}`}>
              
                    <div className='flex-col flex-1 px-16'>
                        <li className="pb-4  font-semibold">Clothing</li>
                        <Link to={`/${"women"}/${"tops"}`} ><li className="pb-4 hover:underline cursor-pointer">Tops</li></Link>
                        <Link to={`/${"women"}/${"dress"}`} ><li className="pb-4 hover:underline cursor-pointer">Dresses</li></Link>
                        <Link to={`/${"women"}/${"pants"}`} ><li className="pb-4 hover:underline cursor-pointer">Pants</li></Link>
                        <Link to={`/${"women"}/${"sweaters"}`} ><li className="pb-4 hover:underline cursor-pointer">Sweaters</li></Link>
                        <Link to={`/${"women"}/${"t-shirts"}`} ><li className="pb-4 hover:underline cursor-pointer">T-Shirts</li></Link>
                        <Link to={`/${"women"}/${"jackets"}`} ><li className="pb-4 hover:underline cursor-pointer">Jackets</li></Link>
                    </div>
                    <div className='flex-col flex-1 px-16'>
                   <li className="pb-4 font-semibold">Accessories </li>
                    <Link to={`/${"women"}/${"watches"}`} ><li className="pb-4 hover:underline cursor-pointer">Watches</li></Link>
                    <Link to={`/${"women"}/${"wallets"}`} ><li className="pb-4 hover:underline cursor-pointer">Wallets</li></Link>
                    <Link to={`/${"women"}/${"bags"}`} ><li className="pb-4 hover:underline cursor-pointer">Bags</li></Link>
                    <Link to={`/${"women"}/${"sunglasses"}`} ><li className="pb-4 hover:underline cursor-pointer">Sunglass</li></Link>
                    <Link to={`/${"women"}/${"hats"}`} ><li className="pb-4 hover:underline cursor-pointer">Hats</li></Link>
                    <Link to={`/${"women"}/${"belts"}`} ><li className="pb-4 hover:underline cursor-pointer">Belts</li></Link>
                    </div>
              
              <div className='flex-col flex-1 px-16'>
                <li className="font-semibold">New Arrivals</li>
                <Link to={`/${"women"}/${"new-arrivals"}`} ><img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-center object-cover hover:opacity-75 cursor-pointer pb-8"></img></Link>
                <li className="font-semibold ">Basic tee</li>
                <Link to={`/${"women"}/${"basic-tee"}`} ><img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="object-center hover:opacity-75 object-cover cursor-pointer"/></Link>
              </div>
              
              
            </div>

          </ul>
    </div>
    {/* men dropdown */}
    <div className="dropdown">
        <button id="tabs-1-tab-1" className={`px-4 text-gray-900 border-transparent whitespace-nowrap py-4  border-b-2 font-medium hover:underline ${isMobile?"text-sm":"text-base"}`} aria-controls="tabs-1-panel-1" role="tab" type="button">Men</button>

          <ul tabIndex="0"  className={`p-2 shadow menu dropdown-content bg-base-100 rounded-box ${isMobile ? "w-68 text-sm  ":"w-[40rem] "}`}>
            <div className={`flex  ${isMobile?"flex-col":"flex-row"}`}>
              <div className="flex-col flex-1 px-16">
                <li className="pb-4 font-semibold">Clothing</li>
                <Link to={`/${"men"}/${"tops"}`} ><li className="pb-4 hover:underline cursor-pointer">Tops</li></Link>
                <Link to={`/${"men"}/${"pants"}`} ><li className="pb-4 hover:underline cursor-pointer">Pants</li></Link>
                <Link to={`/${"men"}/${"sweaters"}`} ><li className="pb-4 hover:underline cursor-pointer">Sweaters</li></Link>
                <Link to={`/${"men"}/${"t-shirts"}`} ><li className="pb-4 hover:underline cursor-pointer">T-Shirts</li></Link>
                <Link to={`/${"men"}/${"jackets"}`} ><li className="pb-4 hover:underline cursor-pointer">Jackets</li></Link>
              </div>
              <div className='flex-col flex-1 px-16'>
              <li className="pb-4  font-semibold">Accessories</li>
              <Link to={`/${"men"}/${"watches"}`} ><li className="pb-4 hover:underline cursor-pointer">Watches</li></Link>
              <Link to={`/${"men"}/${"wallets"}`} ><li className="pb-4 hover:underline cursor-pointer">Wallets</li></Link>
              <Link to={`/${"men"}/${"bags"}`} ><li className="pb-4 hover:underline cursor-pointer">Bags</li></Link>
              <Link to={`/${"men"}/${"sunglasses"}`} ><li className="pb-4 hover:underline cursor-pointer">Sunglass</li></Link>
              <Link to={`/${"men"}/${"hats"}`} ><li className="pb-4 hover:underline cursor-pointer">Hats</li></Link>
              <Link to={`/${"men"}/${"belts"}`} ><li className="pb-4 hover:underline cursor-pointer">Belts</li></Link>
              </div>
              
              <div className='flex-col flex-1 px-16'>
                <li className="font-semibold">New Arrivals</li>
                <Link to={`/${"men"}/${"new-arrivals"}`} ><img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-center object-cover  pb-8 h-32"></img></Link>
                <li className="font-semibold ">Basic tee</li>
                <Link to={`/${"men"}/${"basic-tee"}`} ><img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="object-center object-cover"/></Link>
              </div>
              
            </div>

          </ul>
    </div>
    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/268/082/small_2x/happy-women-jumping-and-holding-shopping-bags-illustration-free-vector.jpg" className="w-32 h-18 ml-[20rem]"/>
  </div>
  {user?
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cart?cart.length:0}</span>
        </div>
      </label>
      <div tabIndex="0" className="mt-3 card card-compact w-52 dropdown-content bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{cart?cart.length:0} Items</span>
          
            
          {/* <span className="text-info-content">0</span> */}
          
          <div className="card-actions">
            <Link to="/cart" className="btn btn-primary btn-block">View cart</Link>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className="dropdown dropdown-end px-4">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791"/>
        </div>
      </label>
      <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={Logout}><a>Logout</a></li>
      </ul>
    </div>
 
  </div>
  :
  isMobile===false?
  <div className="ml-auto flex items-center">
     <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
     <Link to="/login" className="text-sm font-medium text-gray-700 hover:underline">Sign in</Link>
     <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
     <Link to="/" className="text-sm font-medium text-gray-700 hover:underline">Create account</Link>
    </div>

  </div>:
  <div>
    <Link to="/login" className="text-sm font-medium text-gray-700 px-2 hover:underline ">Login</Link>
    <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
    <Link to="/" className="text-sm font-medium text-gray-700 px-2 hover:underline">Register</Link>

  </div>
  
}
</div>
<Banner/> 
</div>

   
  )
}

export default Navbar