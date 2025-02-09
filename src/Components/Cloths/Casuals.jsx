import React, { useEffect, useState, useContext } from 'react'
import { casuals } from '../../Data/Products'
import FilterContext from '../../Contexts/filterContext';

const Casuals = ({ sendValueToParent }) => {
    const { handleApplyFilter, setHandleApplyFilter } = useContext(FilterContext);
    // console.log(handleApplyFilter)

    const [casusalWears, setCasusalWears] = useState([...casuals]);
    const [currentPage, setCurrentPage] = useState(casusalWears.slice(1, 10));
    const [currentPageNum, setCurrentPageNum] = useState(1);
    const [totalPageNum, setTotalPageNum] = useState();

    console.log(currentPage.filter((item)=>item.size === "X-Large"))

    
    useEffect(() => {
        setTotalPageNum(Math.ceil(casusalWears.length / 9));
    }, [casusalWears]);


    const discountedCalculator = (price, discount) => {
        if (discount) {
            return price - (price * (discount / 100));
        }
        return price;
    }


    const handlePages = (btn) => {
        if (btn === "left") {
            if (currentPageNum > 1) {
                setCurrentPageNum(prevState => prevState - 1);
                setCurrentPage(casusalWears.slice((currentPageNum - 2) * 9, (currentPageNum - 1) * 9));
            }
        }
        if (btn === "right") {
            if (currentPageNum < totalPageNum) {
                setCurrentPageNum(prevState => prevState + 1);
                setCurrentPage(casusalWears.slice(currentPageNum * 9, (currentPageNum + 1) * 9));
            }
        }
    }

    const handleSendProductDetails = (item) => {
        sendValueToParent(item);
    }

    return (
        <div className='casual-sec w-full'>
            <div className="casual-sec-wrapper">
                <div className="casual-sec-title flex justify-between items-center px-5">
                    <h1 className='text-4xl font-medium'>Casual</h1>
                    <div className='flex items-center'>
                        <span className='mr-3 font-thin font-grey'>
                            Showing 1-9 of {casusalWears.length} Products
                        </span>
                        <span className='font-grey font-thin gap-1 hidden md:flex'>
                            Sort by:
                            <button className='most-popular-btn font-medium text-black flex items-center gap-2'>
                                Most Popular
                                <img src="/images/svg/down-arrow.svg" alt="" />
                            </button>
                        </span>
                    </div>
                </div>

                <div className="casuals-items-wraper">
                    <div className="casual-card-con flex flex-wrap justify-start gap-5 py-10 border-b max-md:px-2">
                        
                        {currentPage.map((item, index) =>

                            <div onClick={() => { handleSendProductDetails(item) }} key={index} className='casual-card cursor-pointer'>
                                <div className="casual-img-box flex justify-center items-center h-72 lg:h-80 lg:w-[295px] rounded-xl bg-[#F0EEED]">
                                    <img src={item.img} alt="" className='h-[90%] w-full' />
                                </div>

                                <div className="casual-title mt-5 font-semibold">
                                    <span>{item.title}</span>
                                </div>
                                <div className="rating flex mb-1">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span className='' key={i}>

                                            {i < Math.floor(item.rating) ? (
                                                <img src="/images/svg/rating-star.svg" alt="" className='h-5 w-5 ' />
                                            ) : i === Math.floor(item.rating) && item.rating % 1 !== 0 ? (
                                                <img src="/images/svg/half-star.svg" alt="" className='h-5 w-5 ' />
                                            ) : (

                                                ""
                                            )}
                                        </span>
                                    ))}
                                </div>

                                {item.discount ?
                                    (<div className="price text-xl font-bold flex items-center">
                                        <span className='mr-2'>${discountedCalculator(item.price, item.discount)}</span>
                                        <span className='text-[#0006] mr-3 line-through font-normal'>${item.price}</span>
                                        <span className='bg-red-100 text-red-400 text-sm font-light px-3 py-2 rounded-full'>{"-" + item.discount + "%"}</span>
                                    </div >)
                                    :
                                    (<div className="price text-xl font-bold">
                                        <span>${item.price}</span>
                                    </div >)
                                }
                            </div>

                        )}

                    </div >

                    <div className='item-changer-numbers flex justify-between place-items-center py-5'>
                        <button onClick={() => { handlePages('left') }} disabled={currentPageNum <= 1} className={`left-btn border rounded-lg py-2 px-8 hover:bg-gray-100 ${currentPageNum <= 1 ? "cursor-not-allowed" : ""}`}>Previous</button>
                        <span className=''> Page {currentPageNum} out of {totalPageNum} </span>
                        <button onClick={() => { handlePages('right') }} disabled={currentPageNum >= totalPageNum} className={`right-btn border rounded-lg py-2 px-8 flex gap-3 ${currentPageNum >= totalPageNum ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}>
                            Next
                            <img src="/images/svg/arrow-right.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Casuals


