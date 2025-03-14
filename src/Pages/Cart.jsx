import React, { useContext, useState, useEffect } from 'react'
import CartContext from '../Contexts/cartContext'
import { NavLink } from 'react-router'
import PropTypes from 'prop-types'

const Cart = () => {

  const { cart, setCart, currCartValue, setCurrCartValue } = useContext(CartContext);
  const [curcart, setCurcart] = useState(cart);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const deliveryFee = 15;

  useEffect(() => {
    setCurrCartValue(curcart.length);
    calculateSubtotal();
  }, [curcart, setCurrCartValue]);

  const calculateSubtotal = () => {
    let currentSubtotal = 0;
    curcart.forEach(item => {
      currentSubtotal += item.price * (item.quantity || 1); // Ensure quantity is considered, default to 1 if undefined
    });
    setSubtotal(parseFloat(currentSubtotal.toFixed(2)));
  };

  useEffect(() => {
    setTotal(parseFloat((subtotal + deliveryFee).toFixed(2)));
  }, [subtotal, deliveryFee]);

  const handleItemDelete = (item) => {
    const updatedCart = curcart.filter((cartItem) => cartItem !== item);
    setCurcart(updatedCart);
    setCart(updatedCart);
  }

  const handleIncrementQuantity = (item) => {
    const updatedCart = curcart.map(cartItem => {
      if (cartItem === item) {
        return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 };
      }
      return cartItem;
    });
    setCurcart(updatedCart);
    setCart(updatedCart);
  };

  const handleDecrementQuantity = (item) => {
    const updatedCart = curcart.map(cartItem => {
      if (cartItem === item) {
        return { ...cartItem, quantity: Math.max(1, (cartItem.quantity || 1) - 1) }; // Ensure quantity doesn't go below 1
      }
      return cartItem;
    });
    setCurcart(updatedCart);
    setCart(updatedCart);
  };

  return (
    <>
      <section className="cart-page pb-44">
        <div className="container mx-auto">
          <div className="page-router-links flex gap-2 border-t py-7">
            <NavLink to="/" className="font-thin text-[#00000099] flex gap-1">
              Home
              <img src="/images/svg/half-right-arrow.svg" alt="" />
            </NavLink>
            <NavLink to="" className="font-thin flex gap-1">
              Shop
            </NavLink>
          </div>
          <div className="wrapper">
            <h1 className='title font-integral text-4xl font-extrabold mb-5'>Your Cart</h1>
            <div className='cart-items-order-summary flex gap-5'>

              <div className="w-[60%] ">
                <div className="cart-items-con border min-h-[508px] border-gray-200 rounded-2xl px-5">
                  {curcart.length === 0 ? (
                    <div className='text-xl font-bold flex flex-col items-center mt-20'>
                      <img src="/images/svg/empty-cart.svg" alt="" className='h-1/3 w-1/3' />
                    </div>
                  ) : (
                    curcart.map((item, index) => (
                      <div key={index} className="cart-item flex gap-5 py-5 ">
                        <div className="cart-item-img max-h-[124px] max-w-[124px] rounded-xl">
                          <img src={item.img} alt="" className='w-full rounded-lg' />
                        </div>
                        <div className='w-full flex justify-between'>
                          <div className="cart-item-details">
                            <h2 className=''>{item.title}</h2>
                            <p className='font-thin'>Size: <span className='font-grey'>{item.size}</span></p>
                            <p className='font-thin'>Color: <span className='font-grey'>{item.color}</span></p>
                            <p className='font-bold text-2xl font-santoshi'>${item.price}</p>
                          </div>
                          <div className="cart-item-manager flex flex-col items-end justify-between">
                            <button onClick={() => { handleItemDelete(item) }} className='delete-btn'><img src="/images/svg/delete-icon.svg" alt="" className='' /></button>
                            <div className="quantity-btn-wrap flex justify-between bg-[#F0F0F0] rounded-full w-40 py-4 px-5">
                              <button className='minus-btn' onClick={() => handleDecrementQuantity(item)}><img src="/images/svg/minus.svg" alt="" /></button>
                              {item.quantity || 1} {/* Display quantity, default to 1 if undefined */}
                              <button className='plus-btn' onClick={() => handleIncrementQuantity(item)}><img src="/images/svg/plus.svg" alt="" /></button>
                            </div>
                          </div>
                        </div>
                      </div>

                    ))
                  )}


                </div>
              </div>

              <div className="w-[40%]">
                <div className="order-summary-box border  border-gray-200 rounded-2xl p-5">
                  <h2 className='font-santoshi font-semibold mb-2'>Order Summary</h2>
                  <div className='flex justify-between mb-2'>
                    <label htmlFor="" className='font-grey font-thin'>Subtotal</label>
                    <span className='subtotal-price text-black font-semibold'>${subtotal}</span>
                  </div>
                  <div className='flex justify-between mb-2 pb-2'>
                    <label htmlFor="" className='font-grey font-thin'>Delivery Fee</label>
                    <span className='subtotal-price text-black font-semibold'>${deliveryFee}</span>
                  </div>
                  <div className="total-price flex justify-between pt-5 border-t border-t-gray-200">
                    <span className='text-xl'>Total</span>
                    <span className='text-xl font-bold'>${total}</span>
                  </div>
                  <button className='checkout-btn flex items-center justify-center gap-5 font-medium bg-black text-white rounded-full w-full py-4 font-santoshi text-lg mt-5'>
                    Go to Checkout <img src="/images/svg/arrow-right-white.svg" alt="" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
  currCartValue: PropTypes.number.isRequired,
  setCurrCartValue: PropTypes.func.isRequired,
};

export default Cart
