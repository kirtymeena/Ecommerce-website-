import React from 'react'
import { Link } from 'react-router-dom'
import { categoriesData } from '../fakeData' 

const Categories = () => {
  return (
    <div className="mt-24">
        <h1 className="ml-24 mt-8 font-semibold text-2xl">Categories</h1>
        <div className='flex flex-wrap'>
            {categoriesData.map(category=>
            <div key={category.id} className="ml-24 mt-8">
                <Link to="/"><img src={category.image} alt="T-shirt" className="w-40 h-40 object-cover rounded-full hover:opacity-50"/> <span className="pl-14 font-semibold">{category.category}</span></Link>
            </div>
            )}
        </div>
    </div>
  )
}

export default Categories