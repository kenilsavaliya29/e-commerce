import React, { act, createContext, useState } from 'react'
import { NavLink } from 'react-router'
import { useLocation, useNavigate } from 'react-router';
import { useContext } from 'react';
import CartContext from '../Contexts/cartContext';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Product_Review from '../Components/Product_Review';

const Product_Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);
  const [productDetails, setProductDetails] = useState(location.state);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [activeBtn, setActiveBtn] = useState("Ratings & Reviews");


  const handleSize = (size) => {
    setSelectedSize(size);
  }

  const handleColor = (color) => {
    setSelectedColor(color);
  };

  const discountedCalculator = (price, discount) => {
    if (discount) {
      return price - (price * (discount / 100));
    }
    return price;
  }

  const handleQuantityIncr = () => {
    setSelectedQuantity(prevState => prevState + 1);
  }

  const handleQuantityDecr = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(prevState => prevState - 1);
    }
  }
  const handleAddToCart = () => {

    if (selectedSize === "") {
      function showToastMessage() {
        toast.error("select the size!", {
          position: "top-right",
          color: "red"
        });
      };
      showToastMessage();
      console.log("react")
    }

    if (selectedColor === "") {
      function showToastMessage() {
        toast.error("select the color!", {
          position: "top-right",
          color: "red"
        });
      };
      showToastMessage();
    }

    const colorMap = {
      'bg-[#4F4631]': 'brown',
      'bg-[#F3F1EF]': 'offwhite',
      'bg-[#31344F]': 'purple',
    };

    if (colorMap[selectedColor] && selectedSize !== "") {
      const newItem = {
        color: colorMap[selectedColor],
        size: selectedSize,
        quantity: selectedQuantity,
        price: discountedCalculator(productDetails.price, productDetails.discount),
        title: productDetails.title,
        img: productDetails.img,
      };
      setCart((prevCart) => [...prevCart, newItem]);
      navigate('/product-details/cart');
    }

  };

  const handleBtnSelector = (btnName) => {
    setActiveBtn(btnName);
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="page-router-links flex gap-2 border-t py-7 px-5">
          <NavLink to="/" className="font-thin text-[#00000099] flex gap-1">
            Home
            <img src="images/svg/half-right-arrow.svg" alt="" />
          </NavLink>
          <NavLink to="" className="font-thin text-[#00000099] flex gap-1">
            Shop
            <img src="images/svg/half-right-arrow.svg" alt="" />
          </NavLink>
          <NavLink to="" className="font-thin text-[#00000099] flex gap-1">
            Men
            <img src="images/svg/half-right-arrow.svg" alt="" />
          </NavLink>
          <NavLink to="" className="font-thin  flex gap-1">
            Tshirt
          </NavLink>
        </div>
        <div className="product-details-wrap flex justify-between items-center gap-10 pb-24">

          <div className='w-1/2 flex'>
            <div className='side-imgs flex flex-col justify-between gap-2 w-1/3 mr-2'>
              <button>
                <img src={productDetails.subimg.img1} alt="" className='  w-full rounded-3xl' />
              </button>
              <button>
                <img src={productDetails.subimg.img2} alt="" className='  w-full rounded-3xl' />
              </button>
              <button>
                <img src={productDetails.subimg.img3} alt="" className='  w-full rounded-3xl' />
              </button>
            </div>
            <div className='primary-img w-full'>
              <img src={productDetails.img} alt="" className='w-full h-full rounded-3xl' />
            </div>
          </div>
          <div className='w-1/2'>
            <div className="product-title mb-2">
              <h1 className='font-santoshi font-extrabold text-4xl'>{productDetails.title}</h1>
            </div>
            <div className="rating flex mb-1">
              {Array.from({ length: 5 }, (_, i) => (
                <span className='' key={i}>

                  {i < Math.floor(productDetails.rating) ? (
                    <img src="/images/svg/rating-star.svg" alt="" className='h-5 w-5 ' />
                  ) : i === Math.floor(productDetails.rating) && productDetails.rating % 1 !== 0 ? (
                    <img src="/images/svg/half-star.svg" alt="" className='h-5 w-5 ' />
                  ) : (

                    ""
                  )}
                </span>
              ))}
            </div>
            {productDetails.discount ?
              (<div className="price text-3xl font-semibold flex items-center mb-2">
                <span className='mr-2'>${discountedCalculator(productDetails.price, productDetails.discount)}</span>
                <span className='text-[#0006] mr-3 line-through font-normal'>${productDetails.price}</span>
                <span className='bg-red-100 text-red-400 text-sm font-light px-3 py-2 rounded-full'>{"-" + productDetails.discount + "%"}</span>
              </div >)
              :
              (<div className="price text-xl font-bold ">
                <span className=''>${productDetails.price}</span>
              </div >)
            }

            <div className="product-desc pb-7 border-b border-b-gray-200">
              <p className='text-[#0006] font-thin'>{productDetails.description}</p>
            </div>

            <div className="color-selection py-5 border-b border-b-gray-200">
              <h4 className='text-xl font-light text-[#0006]'>Select Colors</h4>
              <div className="colors flex gap-5 mt-3">
                {[
                  { color: "bg-[#4F4631]" },
                  { color: "bg-[#F3F1EF]" },
                  { color: "bg-[#31344F]" },
                ].map((item, index) => (
                  <button onClick={() => { handleColor(item.color) }} key={index} className={`w-[37px] border-2 h-[37px] rounded-full flex justify-center items-center ${item.color}`}>
                    {selectedColor === item.color && <img src="images/svg/tick.svg" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-size py-5 border-b border-b-gray-200">
              <h4 className='text-xl font-light text-[#0006]'>Choose Size</h4>
              <div className='mt-3'>
                {[
                  { size: "Small" },
                  { size: "Medium" },
                  { size: "Large" },
                  { size: "X-Large" },
                ].map((item, index) => (
                  <button onClick={() => { handleSize(item.size) }}
                    key={index}
                    className={`size px-5 mr-2 mb-2 py-2 bg-[#F0F0F0] text-[#00000099] rounded-full font-extralight ${selectedSize === item.size && "bg-black !text-[#ffff]"}`}>
                    {item.size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-add-to-cart flex gap-3 pt-5">
              <div className="quantity-btn-wrap flex justify-between bg-[#F0F0F0] rounded-full w-2/5 py-4 px-5">
                <button className='minus-btn' onClick={handleQuantityDecr}><img src="images/svg/minus.svg" alt="" /></button>
                {selectedQuantity}
                <button className='plus-btn' onClick={handleQuantityIncr}><img src="images/svg/plus.svg" alt="" /></button>
              </div>
              <button onClick={handleAddToCart} className="add-to-cart-btn bg-black text-white rounded-full w-full py-4 font-santoshi text-lg">Add to cart</button>
              <ToastContainer />
            </div>
          </div>
        </div>
        <div className="details-review-faq pb-40">
          <div className='details-selector-btn flex justify-around items-center'>
            {["Product Details", "Ratings & Reviews", "FAQs"].map((btnName) => (
              <button
                key={btnName}
                onClick={() => handleBtnSelector(btnName)}
                className={`product-detail-btn flex-1 px-4 py-2 ${activeBtn === btnName ? " text-black border-b border-b-black" : " font-thin font-grey"}`}
              >
                {btnName}
              </button>
            ))}
          </div>
          {/* product-details */}
          {activeBtn === "Ratings & Reviews" ?
            (<Product_Review productDetails={productDetails} />) : ''
          }
          {/* faqs */}

        </div>
      </div >
    </>
  )
}

export default Product_Details
