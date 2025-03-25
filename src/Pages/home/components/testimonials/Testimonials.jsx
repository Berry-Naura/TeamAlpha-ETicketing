import React, { useState } from 'react';
import UserTestimonial from './UserTestimonial';

function Testimonials(props) {
    const [reviews,setReviews]=useState([
        {
          userName:'User 001',  
          date:'3/24/2025',  
          rating:4,  
          body:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,  
        },
        {
          userName:'User 002',  
          date:'2/04/2020',  
          rating:5,  
          body:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,  
        },
        {
          userName:'User 003',  
          date:'12/24/2024',  
          rating:3,  
          body:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,  
        },
        {
          userName:'User 004',  
          date:'3/24/2025',  
          rating:4,  
          body:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,  
        },
    ])
    return (
        <div className='sm:max-w-[80%] max-w-[90%] mx-auto pb-5'>
            <p className='text-3xl font-bold py-8 text-center font-[cursive]'>What our customers say</p>
            <div className='grid sm:grid-cols-3 gap-4'>
            {reviews.map((review,index)=>(
                <UserTestimonial key={review.id?review.id:index} review={review} />
            ))}
            </div>
        </div>
    );
}

export default Testimonials;