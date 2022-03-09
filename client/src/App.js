import './App.css';
import {BrowserRouter as Router, Routes,Route,Link,Outlet} from 'react-router-dom'
import {isMobile} from 'react-device-detect';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import TopBrands from './components/TopBrands';
import Products from './pages/Products';
import Home from './pages/Home';
import SummerProducts from './pages/SummerProducts';
import Product from './pages/Product';

function App() {
 const Layout=()=>{
   return(
   <>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </>
   )
 }
  
  return (

  <Router> 
      <Routes>
        <Route path="/" element={<Layout/>}>    
          <Route index element={<Home/>}/>
          <Route path="/:category" element={<SummerProducts/>}/>
          <Route path="/:gender/:category" element={<Products/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        
      </Routes> 
     
     
      

   
</Router>
  );
}

export default App;
