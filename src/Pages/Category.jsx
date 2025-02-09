import React, { useEffect, useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import FilterBox from '../Components/FilterBox'
import Casuals from '../Components/Cloths/Casuals'
import FilterContext from '../Contexts/filterContext'


const Category = () => {

  const [valueFromChild, setValueFromChild] = useState("");
  const [handleApplyFilter, setHandleApplyFilter] = useState({});
  const navigate = useNavigate();
  
  const handleValueFromCasual = (value) => {
    setValueFromChild(value);
    navigate('/product-details', { state: value });
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <FilterContext.Provider value={{ handleApplyFilter, setHandleApplyFilter }}>
      <section className='category-sec'>
        <div className="category-wrapper">
          <div className="container mx-auto">
            <div className="page-router-links flex gap-2 border-t py-7 px-5">
              <NavLink to="/" className="font-thin text-[#00000099] flex gap-1">
                Home
                <img src="/images/svg/half-right-arrow.svg" alt="" />
              </NavLink>
              <NavLink to="/casual" className="font-thin  flex gap-1">
                Casual
              </NavLink>
            </div>
            <div className="category-sec-wrapper flex gap-10 pr-2 pb-40">
              <FilterBox  />

              <Casuals sendValueToParent={handleValueFromCasual} />
            </div>
          </div>
        </div>
      </section>
    </FilterContext.Provider>
  )
}

export default Category
