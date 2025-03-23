import React from 'react';
import pic1 from '../../Assets/flyer1.jpeg'
import pic2 from '../../Assets/flyer2.jpeg'
import EventCard from './EventCard';

function Events({filter}) {
    const events=[
        {
            image:pic1,
            name:'Tata in Yaounde',
            location:'Yaounde',
            date:'12/05/2025',
            prices:[2000,4000,6000,10000],
            description:"You're in the right place! We make ticket booking seamless, secure, and hassle-free so you can focus on enjoying the experience"
        },
        {
            image:pic2,
            name:'Kocee in Palaise des sports',
            location:'Yaounde',
            date:'08/03/2025',
            prices:[5000,7000,12000,15000],
            description:"You're in the right place! We make ticket booking seamless, secure, and hassle-free so you can focus on enjoying the experience"
        },
    ]

    return (
        <div className='sm:max-w-[80%] max-w-[90%] mx-auto '>
            <p className='text-2xl font-bold text-start pt-8 pb-5'>{filter}</p>
            <div className='flex gap-5 '>
                {events.map((event)=>(<EventCard event={event} />))}
            </div>
        </div>
    );
}

export default Events;