import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import TopBrands from '../components/TopBrands'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
         <Slider/>
         <Categories/>
         <TopBrands/>
    </div>
  )
}

export default Home