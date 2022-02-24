import React from 'react'
import { Link } from 'react-router-dom'
import { topBrands } from '../fakeData'
const TopBrands = () => {
  return (
    <div className='mt-24'>
        <h1 className="font-semibold text-2xl ml-24 mt-8">Top Brands</h1>
        <div className="flex flex-wrap">
            {topBrands.map(brands=>
            <div key={brands.id} className='ml-24 mt-8' style={{backgroundColor:"#eff1f5"}}>
                <Link to="/"><img  className="w-52 h-72 object-cover" src={brands.image} alt="brands"/>
                <span className='px-14 font-semibold'>{brands.name}</span></Link>
            </div>
            )}
           

        </div>
    </div>
  )
}

export default TopBrands