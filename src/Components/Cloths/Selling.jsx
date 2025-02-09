import React, { useState } from 'react'
import { topSelling } from '../../Data/Products';
import { NavLink } from 'react-router';

const Selling = () => {

    const [selling, setSelling] = useState([...topSelling]);
    const [discountedPrice, setDiscountedPrice] = useState(0)

    const discountedCalculator = (price, discount) => {

        if (discount) {
            return price - (price * (discount / 100));
        }
        return price;
    }

    return (
        <>
            {selling.map((item, index) =>
                <NavLink to="/category" key={index}>
                    <div key={index} className="product-card-con h-3/4 ">
                        <div className="product-img-box flex justify-center items-center h-80 min-w-70 rounded-xl bg-[#F0EEED]">
                            <img src={item.img} alt="" className='h-[90%] w-full' />
                        </div>
                        <div className="product-title mt-5 font-semibold">
                            <span>{item.title}</span>
                        </div>

                        <div className="rating flex mb-1">
                            {Array.from({ length: 5 }, (_, i) => (
                                <span className='' key={i}>
                                    {i < Math.round(item.rating) ?
                                        <img src='images/svg/rating-star.svg' alt="" className='h-5 w-5 ' />
                                        : ""}
                                </span>
                            ))}
                        </div>

                        {item.discount ?
                            (<div className="price text-xl font-bold flex items-center">
                                <span className='mr-2'>${discountedCalculator(item.price, item.discount)}</span>
                                <span className='text-[#0006] mr-3 line-through font-normal'>${item.price}</span>
                                <span className='bg-red-100 text-red-400 text-sm font-thin px-3 py-2 rounded-full'>{"-" + item.discount + "%"}</span>
                            </div >)
                            :
                            (<div className="price text-xl font-bold">
                                <span>${item.price}</span>
                            </div >)
                        }
                    </div >
                </NavLink>
            )}

        </>
    )
}

export default Selling
