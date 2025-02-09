import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router'
import { useContext } from 'react';
import CartContext from '../Contexts/cartContext';

const Navbar = () => {

  const { currCartValue, setCurrCartValue } = useContext(CartContext);

  const [login_reminder, setLogin_reminder] = useState(true);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const hamburgerMenuRef = useRef(null);

  const handleLoginReminder = () => {
    setLogin_reminder(!login_reminder);
  }
  const menuOpen = () => {
    setHamburgerMenu(!hamburgerMenu);
    hamburgerMenuRef.current.style.transform = 'translateX(0%)';
    hamburgerMenuRef.current.style.transition = '0.4s all ease-in-out';
  };

  const menuClose = () => {
    setHamburgerMenu(!hamburgerMenu);
    hamburgerMenuRef.current.style.transform = 'translateX(-100%)';
    hamburgerMenuRef.current.style.transition = '0.4s all ease-in-out';
  }

  const handleNewArrivals = ()=>{
    window.scrollTo({
      top: 920,
      left: 100,
      behavior: "smooth",
    });
  }

  return (
    <>
      {login_reminder &&
        <div className="login-reminder relative bg-black text-white py-3 flex justify-center">
          <p className='text-center flex-1 font-thin'>Sign up and get 20% off to your first order. <NavLink to="" className="border-b font-normal"> Sign Up Now</NavLink></p>
          <button className='relative right-28' onClick={handleLoginReminder} ><img src="/images/svg/cross.svg" alt="" /></button>
        </div>
      }
      <nav className=''>
        <div className='container mx-auto'>
          <div className='nav-wrapper '>
            <div className="header-upper flex justify-between items-center gap-10 py-5">

              <div className={`hamburger-menu-overlay ${hamburgerMenu ? 'block' : 'hidden'} `}></div>
              <div ref={hamburgerMenuRef} className={`hamburger-menu`}>
                <div className="hamburger-menu-logo flex justify-around items-center gap-3">
                  <NavLink to="/" className="py-5 text-2xl font-bold font-integral">SHOP.CO</NavLink>
                  <button onClick={menuClose} className="hamburger-close-icon ">
                    <img src="/images/svg/close-icon.svg" alt="" />
                  </button>
                </div>
                <ul className="hamburger-menu-links">
                  <li className='cursor-pointer'>Shop</li>
                  <li><NavLink to="/">On Sale</NavLink></li>
                  <li><NavLink to="/" >New Arrivals</NavLink></li>
                  <li><NavLink to="/">Brands</NavLink></li>
                </ul>
              </div>


              <div className="logo-hamburger-icon flex place-items-baseline gap-3 ">
                <button onClick={menuOpen} className='hamburger-icon block lg:hidden'>
                  <img src="/images/svg/hamburger-icon.svg" alt="" />
                </button>
                <NavLink to="/" className='text-2xl sm:text-4xl font-bold font-integral'>SHOP.CO</NavLink>
              </div>
              <ul className='hidden lg:flex justify-center items-center gap-7 font-thin whitespace-nowrap'>
                <li className='flex gap-1 cursor-pointer'>Shop <img src="/images/svg/down-arrow.svg" alt="" /></li>
                <li><NavLink to="/">On Sale</NavLink></li>
                <li><NavLink to="/" onClick={handleNewArrivals}>New Arrivals</NavLink></li>
                <li><NavLink to="/">Brands</NavLink></li>
              </ul>

              <div className='nav-search-bar hidden sm:flex flex-1 lg:flex-none  justify-center items-center gap-5 w-1/3 rounded-full bg-gray-100'>
                <input type='text' placeholder='Search for products...' className='w-full px-5 py-3 focus-visible:border-0 bg-gray-100 text-gray-600 font-thin rounded-s-full' />
                <button className='bg-gray-100 rounded-r-full mr-5'><img className='py-4' src="/images/svg/search-icon.svg" alt="" /></button>
              </div>

              <div className="carts-profile flex justify-center items-center gap-5">
                <NavLink to="/product-details/cart" className="relative">
                  <img src="/images/svg/cart-icon.svg" alt="" />
                  <span className='cart-item-value absolute bottom-3 left-3 flex justify-center items-center text-xs bg-black text-white w-5 h-5 rounded-full'>{currCartValue}</span>
                </NavLink>
                <NavLink to="/profile"><img src="/images/svg/profile-icon.svg" alt="" /></NavLink>
              </div>
            </div>

            <div className="header-lower bg-black p-2 block sm:hidden ">
              <div className='nav-search-bar flex flex-1 lg:flex-none  justify-center items-center gap-5 w-full rounded-full bg-gray-100'>
                <input type='text' placeholder='Search for products...' className='w-full px-5 py-3 focus-visible:border-0 bg-gray-100 text-gray-600 font-thin rounded-s-full' />
                <button className='bg-gray-100 rounded-r-full mr-5'><img className='py-4' src="/images/svg/search-icon.svg" alt="" /></button>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
