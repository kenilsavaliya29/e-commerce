import React, { useState, useEffect } from 'react';

const Product_Review = ({ productDetails }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if ('reviews' in productDetails) {
            setReviews(Object.values(productDetails.reviews));
        }
    }, [productDetails]);

    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="title-bar flex flex-col sm:flex-row justify-between pt-5">
                <div className="total-reviews flex items-center gap-1 mb-4 sm:mb-0">
                    <h2 className="font-semibold">All Reviews</h2>
                    <span className='font-grey text-lg'>({reviews.length})</span>
                </div>
                <div className="review-selection flex gap-2">
                    <button className="bg-[#F0F0F0] p-2 rounded-full">
                        <img src="/images/svg/settings.svg" alt="" />
                    </button>
                    <div className="bg-[#F0F0F0] p-2 pl-4 rounded-full flex gap-2">
                        <select name="" id="" className="bg-transparent appearance-none">
                            <option value="">Latest</option>
                        </select>
                        <img src="/images/svg/down-arrow.svg" alt="" className="me-2" />
                    </div>
                    <button className="bg-black text-white font-thin px-5 py-2 rounded-full">
                        Write a review
                    </button>
                </div>
            </div>

            {/* Review Cards Container */}
            <div className="review-cards-con py-7 flex flex-wrap justify-center gap-5">
                {reviews.length > 0 ? (
                    reviews.map((item, index) => (
                        <div
                            key={index}
                            className="review-card border border-gray-200 rounded-2xl p-3"
                            style={{
                                flex: '0 0 calc(100% - 10px)',
                                marginBottom: '10px',
                            }}
                        >
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
                            <div className="reviewer-name py-3">{item.reviewerName}</div>
                            <div className="review mb-3">{item.review}</div>
                            <div className="review-date">{item.reviewDate}</div>
                        </div>
                    ))
                ) : (
                    <div className='no-reviews flex flex-col justify-center items-center'>
                        <img src='/images/svg/man.svg' className='w-1/4 mb-4' alt='' />
                        <h3 className=''>"Be the First to Leave a Review"</h3>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Product_Review;
