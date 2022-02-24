import React,{useState} from 'react'
import { useEffect } from 'react'
import './slider.css'
import { MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md";
import {CourselData} from '../SliderData'

const Slider = () => {

  const [activeIndex,setActiveindex] = useState(0)

  const handleRight = ()=>{
    if(activeIndex<75){
      setActiveindex(prev=>prev+25)
    }
   
    else{
    setActiveindex(0)
  }
    
  }

  const handleLeft=()=>{
    if(activeIndex>0){
      setActiveindex(prev=>prev-25)
    }
    else if(activeIndex===0){
      setActiveindex(75)
    }
    else{
      setActiveindex(0)
    }


  }
  useEffect(()=>{
    console.log(activeIndex)

    const automaticSlider = ()=>{
      if(activeIndex<=75){
        setTimeout(handleRight,5000)
      }
      else{
        setActiveindex(0)
      }
     
    }
    automaticSlider()
    
  },[activeIndex])

  return (
    <div className="mt-12">
     <div className='carousel'>
       
       {/* coursel */}
         <div className="inner" style={{transform:`translateX(-${activeIndex}%)`}}>
        
           {CourselData.map(data=>
            
            <div key={data.id}className="items">
                <img src={data.item} className="w-[222.3vh] h-[300px] object-cover "/>
                  <div className="absolute">
                    <p className="text-black text-2xl font-semibold animate-pulse">{data.desc}</p>
                    {data.text?
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">{data.text}</button>:""
                      }

                  </div>
                  {data.button?
                <div className="absolute ml-[54rem] pt-40">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">{data.button}</button>
                </div>:""
                      }
            </div>
            )}
            
         </div>

         <div className="button ml-[1rem] pt-36 ">
         <button className="btn btn-circle btn-outline bg-white" onClick={handleLeft}>
            <MdKeyboardArrowLeft size={30}/>
          </button>
          </div>

          <div className="button ml-[80rem] pt-36">
          <button onClick={handleRight} className="btn btn-circle btn-outline bg-white" >
            <MdKeyboardArrowRight size={30}/>
          </button>
             
          </div>
    </div>
    
    
     </div>
          
        
    
  )
}

export default Slider