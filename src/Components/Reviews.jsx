import React, { useState } from 'react'
import { clientReviews } from '../Data/Reviews'
import { NavLink } from 'react-router';

const Reviews = () => {
    const [reviews, setReviews] = useState([...clientReviews]);

    return (
        <>
            {reviews.map((item, index) =>
                <div key={index} className='card min-w-[260px] md:min-w-[400px] p-10 py-7 rounded-2xl border'>
                    <div className="rating flex mb-2">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span className='' key={i}>
                                {i < Math.round(item.stars) ?
                                    <img src='images/svg/rating-star.svg' alt="" className='h-5 w-5' />
                                    : ""
                                }
                            </span>
                        ))}
                    </div>

                    <div className="client-name flex mb-2">
                        <span className='text-xl'>{item.clientName}</span>
                        <span className='verification-badge'>{item.verified ?
                            <img src='images/svg/verification.svg' /> : ""
                        }</span>
                    </div>

                    <div className='client-review-message mb-2'>
                        <p className='text-[#0006]'>{item.message}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Reviews
