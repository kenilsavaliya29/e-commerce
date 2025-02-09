import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CartContext from './cartContext';


const Layout = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currCartValue, setCurrCartValue] = useState(0);

  const handleNewArrivals = (item)=>{
    console.log(item);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, currCartValue, setCurrCartValue }}>
      <Navbar handleNewArrivals={handleNewArrivals} />
      <div className='wrapper' >{children}</div>
      <Footer />
    </CartContext.Provider>
  );
};

export default Layout;


//wrapped navbar and footer here