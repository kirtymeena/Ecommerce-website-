import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import {isMobile} from 'react-device-detect';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import TopBrands from './components/TopBrands';
import Products from './pages/Products';

function App() {
  return (

  <Router>  
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>

        <Navbar/>
        {/* <Slider/>
        <Categories/>
        <div className="divider"></div> 
        <TopBrands/> */}
        <Products/>
    
   
     
  
    <Footer/>
    
    

     
      
</Router>
  );
}

export default App;
