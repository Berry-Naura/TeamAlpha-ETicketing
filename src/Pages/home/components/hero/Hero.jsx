import React from 'react';
import HeroImage from '../../../../Assets/image2.jpg'
import './hero.css'
import { Button, Chip } from '@mui/material';

function Hero(props) {
    return (
        <div className='w-[100%] h-[85vh] hero'>
            <div className='bg-[#000000a6] w-full h-full flex items-center text-white'>
                <div className='sm:max-w-[80%] max-w-[90%] mx-auto'>
                    <p className='sm:text-6xl text-4xl font-medium my-4 font-[cursive]'>
                        Your gateway to unforgettable events
                    </p>
                    <p className='font-light font-[cursive] sm:text-xl text-lg'>
                        Looking for the hottest concerts, sports games, theater shows, or local festivals? You're in the right place! We make ticket booking seamless, secure,
                        and hassle-free so you can focus on enjoying the experience
                    </p>
                    <div className='w-full flex justify-center items-center sm:gap-x-5 gap-x-2 mt-3.5'>
                        <Chip label="Sports" color='success' variant='filled' />
                        <Chip label="Theater" color='warning' variant='filled' />
                        <Chip label="Concerts" color='info' variant='filled' />
                        <Chip label="Seminars" color='secondary' variant='filled' />
                    </div>
                </div>
            </div>
            {/* <img src={HeroImage} className='w-full h-full object-fill' alt='hero image'/> */}
        </div>
    );
}

export default Hero;