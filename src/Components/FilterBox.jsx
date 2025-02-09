import React, { useState, useContext } from 'react'
import FilterContext from '../Contexts/filterContext';

const FilterBox = ({ }) => {

    const { handleApplyFilter, setHandleApplyFilter } = useContext(FilterContext);

    const [boxHandler, setBoxHandler] = useState({
        priceBox: true,
        colorBox: true,
        sizeBox: true,
        dressBox: true
    });

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const handleBoxToggle = (box) => {

        switch (true) {
            case box === 1:
                setBoxHandler({
                    ...boxHandler,
                    priceBox: !boxHandler.priceBox
                })
                break;

            case box === 2:
                setBoxHandler({
                    ...boxHandler,
                    colorBox: !boxHandler.colorBox
                })
                break;

            case box === 3:
                setBoxHandler({
                    ...boxHandler,
                    sizeBox: !boxHandler.sizeBox
                })
                break;

            case box === 4:
                setBoxHandler({
                    ...boxHandler,
                    dressBox: !boxHandler.dressBox
                })
                break;

            default:
                break;
        }
    }

    const handleColor = (color) => {
        setSelectedColor(color);
    };

    const handleSize = (size) => {
        setSelectedSize(size);
    }

    const handleApplyFilterBtn = () => {
        setHandleApplyFilter({
            color : selectedColor, 
            size :selectedSize
        });
    }

    return (

        <div className="filter-box hidden md:block w-[30%] border rounded-xl p-6 h-fit">
            <div className="filter-header flex justify-between pb-4 border-b">
                <span className='font-semibold'>Filters</span>
                <button className='filter-btn'>
                    <img src="images/svg/filter.svg" alt="" />
                </button>
            </div>

            <div className="filter-cloth-type py-4 border-b">
                {[
                    { label: 'T-Shirts' },
                    { label: 'Shorts' },
                    { label: 'Shirts' },
                    { label: 'Hoodie' },
                    { label: 'Jeans' }
                ].map((item, index) => (
                    <button key={index} className='w-full tshirt-btn flex justify-between items-center text-[#00000099] font-thin'>
                        {item.label}
                        <img src="images/svg/half-right-arrow.svg" alt="" />
                    </button>
                ))}
            </div>

            <div className="filter-price pb-4 border-b">
                <div className='filter-price-upper flex justify-between py-4'>
                    <span className="filter-price-label font-semibold">Price</span>
                    <button onClick={() => { handleBoxToggle(1) }} className='price-box-close-toggle'>
                        <img src="images/svg/half-up-arrow.svg" alt="" />
                    </button>
                </div>
                <div className={`filter-price-lower ${boxHandler.priceBox ? '' : 'hidden'} `}>
                    <input type="range" name="" id="" />
                </div>
            </div>

            <div className="filter-colors pb-5 border-b ">
                <div className='filter-colors-upper flex justify-between py-4'>
                    <span className="filter-price-label font-semibold">Colors</span>
                    <button onClick={() => { handleBoxToggle(2) }} className='colors-box-close-toggle'>
                        <img src="images/svg/half-up-arrow.svg" alt="" />
                    </button>
                </div>
                <div className={`filter-price-lower flex flex-wrap gap-4 ${boxHandler.colorBox ? '' : 'hidden'} `}>
                    {[
                        { color: "bg-[#00C12B]" },
                        { color: "bg-[#F50606]" },
                        { color: "bg-[#F5DD06]" },
                        { color: "bg-[#F57906]" },
                        { color: "bg-[#06CAF5]" },
                        { color: "bg-[#063AF5]" },
                        { color: "bg-[#7D06F5]" },
                        { color: "bg-[#F506A4]" },
                        { color: "bg-white" },
                        { color: "bg-black" },
                    ].map((item, index) => (
                        <button onClick={() => { handleColor(item.color) }} key={index} className={`w-[37px] border-2 h-[37px] rounded-full flex justify-center items-center ${item.color}`}>
                            {selectedColor === item.color ? (
                                selectedColor === "bg-white" ?
                                    <img src="images/svg/tick.svg" className='invert' /> : <img src="images/svg/tick.svg" />) : ""}
                        </button>
                    ))}

                </div>
            </div>

            <div className="filter-size">
                <div className='filter-size-upper flex justify-between py-4'>
                    <span className="filter-size-label font-semibold">Size</span>
                    <button onClick={() => { handleBoxToggle(3) }} className='colors-box-close-toggle'>
                        <img src="images/svg/half-up-arrow.svg" alt="" />
                    </button>
                </div>
                <div className={`filter-size ${boxHandler.sizeBox ? '' : 'hidden'} `}>
                    {[
                        { size: "XX-Small" },
                        { size: "X-Small" },
                        { size: "Small" },
                        { size: "Medium" },
                        { size: "Large" },
                        { size: "X-Large" },
                        { size: "XX-Large" },
                        { size: "3X-Large" },
                        { size: "4X-Large" },
                    ].map((item, index) => (
                        <button onClick={() => { handleSize(item.size) }}
                            key={index}
                            className={`size px-5 mr-2 mb-2 py-2 bg-[#F0F0F0] text-[#00000099] rounded-full font-extralight ${selectedSize === item.size && "bg-black !text-[#ffff]"}`}>
                            {item.size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="filter-dress-style">
                <div className='filter-dress-style-upper flex justify-between py-4'>
                    <span className="filter-dress-style-label font-semibold">Dress Style</span>
                    <button onClick={() => { handleBoxToggle(4) }} className='colors-box-close-toggle'>
                        <img src="images/svg/half-up-arrow.svg" alt="" />
                    </button>
                </div>
                <div className={`filter-dress-style-lower pb-7 ${boxHandler.dressBox ? '' : 'hidden'} `}>
                    {[
                        { label: 'Casuals' },
                        { label: 'Formals' },
                        { label: 'T-Shirts' },
                        { label: 'Party' },
                        { label: 'Gym' }
                    ].map((item, index) => (
                        <button key={index} className='w-full flex justify-between items-center font-thin text-[#00000099] tshirt-btn'>
                            {item.label}
                            <img src="images/svg/half-right-arrow.svg" alt="" />
                        </button>
                    ))}

                </div>
            </div>

            <div className="filter-apply">
                <button onClick={handleApplyFilterBtn} className='filter-apply-btn rounded-full bg-black text-white w-full py-3'>Apply Filter</button>
            </div>
        </div>
    )
}

export default FilterBox
