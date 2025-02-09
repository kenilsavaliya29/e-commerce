import React, { useState, useRef } from 'react'
import Arrivals from '../Components/Cloths/Arrivals'
import Selling from '../Components/Cloths/Selling'
import { NavLink } from 'react-router'
import Reviews from '../Components/Reviews'

const Home = ({handleNewArrivals}) => {

  const [heightValueArrival, setHeightValueArrival] = useState(true);
  const [heightValueSelling, setHeightValueSelling] = useState(true);
  const [scrollvalues, setScrollvalues] = useState(0)

  const scrollContainerRef = useRef(null);

  const handleArrivalViewAllItems = () => {
    setHeightValueArrival(prevState => !prevState);
  }

  const handleSellingViewAllItems = () => {
    setHeightValueSelling(prevState => !prevState);
  }


  const handleLeftScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300;
      setScrollvalues(scrollContainerRef.current.scrollLeft)
    }
  }

  const handleRightScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300;
      setScrollvalues(scrollContainerRef.current.scrollLeft)
    }
  }

  if(handleNewArrivals === true){
    window.scrollTo(0,0)
  }
  
  return (
    <>
      <section className='hero-sec bg-[#F2F0F1]'>
        <div className="container mx-auto">
          <div className="hero-content px-4 max-md:flex-wrap flex justify-around items-center  gap-10">
            <div className="hero-text gap-5">
              <h1 className='text-5xl sm:text-7xl font-bold font-integral mb-5'>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
              <p className='text-sm sm:text-lg font-thin mb-5'>Browse through our diverse range of meticulously crafted garments, <br /> designed to bring out your individuality and cater to your sense of style.</p>
              <button className='bg-black text-white py-3 px-16 rounded-full font-thin'>Shop Now</button>
            </div>
            <div className="hero-image ">
              <img src="images/png/hero-img.png" alt="" className='w-full' />
            </div>
          </div>
        </div>
      </section>

      <section className='featured-brands-sec'>
        <div className="brands-con bg-black">
          <div className="container mx-auto">
            <div className="brands py-10 px-6 flex flex-wrap item-center justify-around gap-7">
              <img src="images/png/versace.png" alt="" />
              <img src="images/png/zara.png" alt="" />
              <img src="images/png/gucci.png" alt="" />
              <img src="images/png/prada.png" alt="" />
              <img src="images/png/calvein-klein.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='new-arrivals-sec py-20 font-integral'>
        <div className="container mx-auto">
          <h1 className='text-center font-bold text-6xl font-integral'>New Arrivals</h1>
          <div className="arrivals-products-sec-con border-b">
            <div className={`arrivals-product-con flex flex-wrap justify-center gap-5 gap-y-7 py-14 overflow-hidden ${heightValueArrival ? 'h-[500px]' : 'h-auto'}`}>
              <Arrivals />
            </div>
            <div className='flex place-items-center pb-5'>
              <button onClick={handleArrivalViewAllItems} className="view-all mx-auto py-3 px-20 rounded-full border hover:bg-gray-50">{heightValueArrival ? 'View All' : 'Close All'}</button>
            </div>
          </div>
        </div>
      </section>

      <section className='top-selling-sec py-20 font-integral'>
        <div className="container mx-auto">
          <h1 className='text-center font-bold text-6xl font-integral'>Top Selling</h1>
          <div className="selling-products-sec-con border-b">
            <div className={`selling-product-con flex flex-wrap justify-center gap-5 gap-y-7 py-14 overflow-hidden ${heightValueSelling ? 'h-[500px]' : 'h-auto'}`}>
              <Selling />
            </div>
            <div className='flex place-items-center pb-5'>
              <button onClick={handleSellingViewAllItems} className="view-all mx-auto py-3 px-20 rounded-full border hover:bg-gray-50">{heightValueSelling ? 'View All' : 'Close All'}</button>
            </div>
          </div>
        </div>
      </section>

      <section className='browse-your-style-sec'>
        <div className="container mx-auto">
          <div className=" flex items-center justify-center">
            <div className="sec-box bg-[#F0F0F0] rounded-2xl w-[95%]">
              <h1 className='text-center font-bold text-6xl font-integral pt-20 pb-16'>BROWSE YOUR STYLE</h1>
              <div className="style-types-con flex flex-wrap flex-col md:flex-row justify-center place-items-center gap-10 px-8 pb-20">

                <NavLink to="/category" className="w-full md:w-1/3  h-[300px]">
                  <div className="casual h-[300px] relative">
                    <h3 className='py-5 px-5 font-semibold text-4xl'>Casual</h3>
                  </div>
                </NavLink>

                <NavLink to="" className="w-full md:w-1/2  h-[300px]">
                  <div className="formal  h-[300px] relative">
                    <h3 className='py-5 px-5 font-semibold text-4xl'>Formal</h3>
                  </div>
                </NavLink>

                <NavLink to="" className="w-full md:w-1/2 h-[300px]">
                  <div className="party h-[300px] relative">
                    <h3 className='py-5 px-5 font-semibold text-4xl'>Party</h3>
                  </div>
                </NavLink>

                <NavLink to="" className="w-full md:w-1/3 h-[300px]">
                  <div className="gym h-[300px] relative">
                    <h3 className='py-5 px-5 font-semibold text-4xl'>Gym</h3>
                  </div>
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="our-happy-customer-sec pb-36">
        <div className="container mx-auto">
          <div className="sec-wrapper px-7 py-5">
            <div className='sec-title-slider-btns flex flex-wrap justify-end lg:justify-between items-end gap-10 pt-20 pb-16'>
              <h1 className='font-bold text-4xl md:text-6xl font-integral w-fit'>OUR HAPPY CUSTOMERS</h1>
              <div className='slider-btns'>
                <button className='left-btn' onClick={handleLeftScroll} >
                  <img src="images/svg/arrow-left.svg" alt="" />
                </button>
                <button className='right-btn ml-5' onClick={handleRightScroll}>
                  <img src="images/svg/arrow-right.svg" alt="" />
                </button>
              </div>
            </div>

            <div ref={scrollContainerRef} className="review-cards-con flex justify-center gap-6 overflow-scroll scroll-smooth pb-16">
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
