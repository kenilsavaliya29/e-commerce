import React, { useState } from 'react'
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
  const [faqOpenStates, setFaqOpenStates] = useState([false, false, false, false, false]);

  // Product details data
  const productSpecs = {
    material: "100% Organic Cotton",
    madeFrom: "Ethically sourced materials",
    manufacturing: "Made in India",
    type: "Casual T-Shirt",
    gender: "Unisex",
    fit: "Regular Fit",
    careInstructions: "Machine wash cold, tumble dry low",
    weight: "180 GSM",
    fabricType: "Jersey Knit",
    origin: "Handcrafted in Jaipur",
    sustainability: "Eco-friendly dyes used",
    certifications: "GOTS Certified Organic",
    features: [
      "Breathable fabric",
      "Soft and comfortable",
      "Durable stitching",
      "Tagless for comfort",
      "Moisture-wicking properties"
    ]
  };

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
      toast.error("Select the size!", {
        position: "top-right",
        color: "red"
      });
    }

    if (selectedColor === "") {
      toast.error("Select the color!", {
        position: "top-right",
        color: "red"
      });
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
        specs: productSpecs
      };
      setCart((prevCart) => [...prevCart, newItem]);
      navigate('/product-details/cart');
    }
  };

  const handleBtnSelector = (btnName) => {
    setActiveBtn(btnName);
  }

  const faqData = [
    {
      question: "What is the product made of?",
      answer: `This ${productDetails.title} is crafted from ${productSpecs.material}, ensuring both comfort and durability.`
    },
    {
      question: "How do I determine my size?",
      answer: "We recommend referring to our size chart available on the product page. It provides detailed measurements to help you choose the perfect fit."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange."
    },
    {
      question: "How long will shipping take?",
      answer: "Shipping times vary depending on your location. Typically, orders are processed within 1-2 business days, and standard shipping usually takes 3-5 business days."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times for international orders vary by destination."
    }
  ];

  const toggleFAQ = (index) => {
    const newFaqOpenStates = [...faqOpenStates];
    newFaqOpenStates[index] = !newFaqOpenStates[index];
    setFaqOpenStates(newFaqOpenStates);
  };

  const renderProductDetails = () => (
    <div className="product-specs px-5 py-5">
      <h2 className="text-2xl font-bold mb-4">Product Specifications</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Material</h3>
          <p>{productSpecs.material}</p>
        </div>
        <div>
          <h3 className="font-semibold">Type</h3>
          <p>{productSpecs.type}</p>
        </div>
        <div>
          <h3 className="font-semibold">Fit</h3>
          <p>{productSpecs.fit}</p>
        </div>
        <div>
          <h3 className="font-semibold">Weight</h3>
          <p>{productSpecs.weight}</p>
        </div>
        <div>
          <h3 className="font-semibold">Manufacturing</h3>
          <p>{productSpecs.manufacturing}</p>
        </div>
        <div>
          <h3 className="font-semibold">Sustainability</h3>
          <p>{productSpecs.sustainability}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
        <ul className="list-disc pl-5">
          {productSpecs.features.map((feature, index) => (
            <li key={index} className="mb-1">{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Care Instructions</h3>
        <p>{productSpecs.careInstructions}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="page-router-links flex flex-wrap gap-2 border-t py-7 px-5">
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
        <div className="product-details-wrap flex flex-col lg:flex-row justify-between items-center gap-10 pb-24">
          <div className='w-full lg:w-1/2 flex flex-col lg:flex-row gap-5'>
            <div className='side-imgs flex flex-row lg:flex-col justify-between gap-2 w-full lg:w-1/3 mr-2'>
              <button>
                <img src={productDetails.subimg.img1} alt="" className='w-full rounded-3xl' />
              </button>
              <button>
                <img src={productDetails.subimg.img2} alt="" className='w-full rounded-3xl' />
              </button>
              <button>
                <img src={productDetails.subimg.img3} alt="" className='w-full rounded-3xl' />
              </button>
            </div>
            <div className='primary-img w-full'>
              <img src={productDetails.img} alt="" className='w-full h-full rounded-3xl' />
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
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

            <div className="quantity-add-to-cart flex flex-col sm:flex-row gap-3 pt-5">
              <div className="quantity-btn-wrap flex justify-between bg-[#F0F0F0] rounded-full w-full sm:w-2/5 py-4 px-5">
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
          <div className='details-selector-btn flex flex-wrap justify-around items-center'>
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
          {activeBtn === "FAQs" ?
            (<div className="faq-content px-5 py-5">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item mb-3 border-b border-gray-200 pb-3">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="faq-question flex justify-between items-center w-full text-left py-2"
                  >
                    <h4 className="font-semibold text-lg ">{faq.question}</h4>
                    <img
                      src={faqOpenStates[index] ? "images/svg/minus.svg" : "images/svg/plus.svg"}
                      alt={faqOpenStates[index] ? "Close" : "Open"}
                      className="h-5 w-5"
                    />
                  </button>
                  {faqOpenStates[index] && (
                    <div className="faq-answer mt-2 font-thin text-[#0006] pb-2">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>) : ''
          }
        </div>
      </div >
    </>
  )
}

export default Product_Details
