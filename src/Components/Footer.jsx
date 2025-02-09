import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <footer className='footer-sec bg-[#F0F0F0]'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="footer-wrapper pt-20">
                    <div className="footer-upper -mt-40">
                        <div className="offer-upper-box mx-5 flex flex-wrap justify-between items-center gap-5 bg-black text-white p-7 md:p-10 md:px-14 rounded-3xl">
                            <h1 className='font-integral text-3xl md:text-5xl'>
                                STAY UPTO DATE ABOUT <br />
                                OUR LATEST OFFERS
                            </h1>
                            <div className="contact-fields w-full lg:w-1/4">
                                <div className="email-field flex flex-nowrap mb-4">
                                    <img src="/images/svg/logo-mail.svg" alt="" className='bg-white rounded-l-full pl-5 py-3' />
                                    <input type="email" placeholder='Enter your email address' className='rounded-r-full text-[#0006] text font-thin px-5 py-3 w-full' />
                                </div>
                                <button className="submit-email-btn rounded-full bg-white text-black px-5 py-3 w-full">
                                    Submit to NewsLetter
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="footer-lower mt-10 mx-5 pb-7 border-b">
                        <div className="footer-lower-items-wrap flex flex-wrap md:flex-nowrap  justify-between gap-5 py-5">
                            <div className="footer-comp-info w-full lg:w-1/4">
                                <NavLink to="/" className='text-2xl sm:text-4xl font-bold font-integral'>SHOP.CO</NavLink>
                                <p className='text-[#0006]'>
                                    We have clothes that suits your style and which you're proud to wear. From women to men.
                                </p>
                                <div className="social-links flex place-items-center space-x-4 mt-4">
                                    <NavLink to="" className=""><i className='icon-x'></i></NavLink>
                                    <NavLink to="" className=""><i className='icon-fb'></i></NavLink>
                                    <NavLink to="" className=""><i className='icon-insta'></i></NavLink>
                                    <NavLink to="" className=""><i className='icon-git'></i></NavLink>
                                </div>
                            </div>

                            <div className="footer-links company w-1/3 sm:w-1/3 lg:w-1/5 ">
                                <div className="footer-link-title">
                                    <h4 className='uppercase font-thin mb-3'>Company</h4>
                                </div>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>About</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Features</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Works</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Career</NavLink>
                            </div>

                            <div className="footer-links company w-1/3 sm:w-1/3 lg:w-1/5">
                                <div className="footer-link-title">
                                    <h4 className='uppercase font-thin mb-3'>Help</h4>
                                </div>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Customer Support</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Delivery Details</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Terms & Conditions</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Privacy Policy</NavLink>
                            </div>

                            <div className="footer-links company w-1/3 sm:w-1/3 lg:w-1/5">
                                <div className="footer-link-title">
                                    <h4 className='uppercase font-thin mb-3'>Faq</h4>
                                </div>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>About</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Manage Deliveries</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Orders</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Payments</NavLink>
                            </div>

                            <div className="footer-links company w-1/3 sm:w-1/3 lg:w-1/5">
                                <div className="footer-link-title">
                                    <h4 className='uppercase font-thin mb-3'>Resources</h4>
                                </div>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Free eBooks</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Development Tutorial</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>How to - Blog</NavLink>
                                <NavLink to="" className='block mb-1 font-thin text-[#00000099]'>Youtube Playlist</NavLink>
                            </div>
                        </div>

                        <div className="footer-copyright flex flex-wrap justify-between items-center gap-4 pb-3 pt-5 border-t border-t-slate-300">
                            <p className='text-[#00000099] font-thin '>Shop.co © 2000-2023, All Rights Reserved</p>
                            <div className="payments flex flex-wrap gap-y-2">
                                <NavLink to="" className="border rounded-md bg-white px-5 py-2 mr-2"><img src="/images/svg/Visa.svg" alt="" /></NavLink>
                                <NavLink to="" className="border rounded-md bg-white px-5 py-2 mr-2"><img src="/images/svg/Mastercard.svg" alt="" /></NavLink>
                                <NavLink to="" className="border rounded-md bg-white px-5 py-2 mr-2"><img src="/images/svg/Paypal.svg" alt="" /></NavLink>
                                <NavLink to="" className="border rounded-md bg-white px-5 py-2 mr-2"><img src="/images/svg/GPay.svg" alt="" /></NavLink>
                                <NavLink to="" className="border rounded-md bg-white px-5 py-2 mr-2"><img src="/images/svg/apple-pay.svg" alt="" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
