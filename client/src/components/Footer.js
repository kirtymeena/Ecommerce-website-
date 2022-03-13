import React from 'react'
import { Link } from 'react-router-dom'
import {isMobile} from 'react-device-detect';
import { useSelector } from 'react-redux';
import { SiTwitter,SiPinterest } from 'react-icons/si';
import { AiFillInstagram,AiFillFacebook } from 'react-icons/ai';


const Footer = () => {
  
  return (
    <div className="bg-stone-900 w-full h-[10rem] mt-10">
        <div  className="flex flex-col">
          
        <div className="flex flex-row h-[3rem] pt-4 ">
               <div className='pl-[37rem] cursor-pointer'>
                 <SiTwitter color={"#00b6f1"} size={20}/> 
                </div>
               <div className='pl-[1rem] cursor-pointer'>
                 <AiFillInstagram color={"white"} size={20}/> 
                </div>
               <div className='pl-[1rem] cursor-pointer'>
                 <SiPinterest color={"#b7081b"} size={20}/> 
                </div>
               <div className='pl-[1rem] cursor-pointer'>
                 <AiFillFacebook color={"#4867aa"} size={20}/> 
                </div>
          </div>
          <div className="flex flex-row">
            
                <div className="text-slate-400 pt-[2rem] ml-96 cursor-pointer hover:underline">About</div>
                <div  className="text-slate-400 pt-[2rem] ml-20 cursor-pointer hover:underline">Services</div>
                <div  className="text-slate-400 pt-[2rem] ml-20 cursor-pointer hover:underline">Contact</div>
                <div  className="text-slate-400 pt-[2rem] ml-20 cursor-pointer hover:underline">Shipping</div>
                <div  className="text-slate-400 pt-[2rem] ml-20 cursor-pointer hover:underline">Returns</div>
          </div> 
          </div>
    </div>
  )
}

export default Footer