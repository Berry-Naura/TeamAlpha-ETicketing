import React, { useState } from 'react';
// import HeroImage from '../../../../Assets/image2.jpg'
import './hero.css'
import {Button, Chip,FormControl, Input, } from '@mui/material';
import { Search } from '@mui/icons-material';

function Hero(props) {
    const [search,setSearch]=useState('')
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
                        <Chip label="Sports" color='success' variant='filled' sx={{p:2.5,borderRadius:'25px'}} />
                        <Chip label="Theater" color='warning' variant='filled' sx={{p:2.5,borderRadius:'25px'}} />
                        <Chip label="Concerts" color='info' variant='filled' sx={{p:2.5,borderRadius:'25px'}} />
                        <Chip label="Seminars" color='secondary' variant='filled' sx={{p:2.5,borderRadius:'25px'}} />
                    </div>
                    <FormControl sx={{display:{md:'none',sm:'flex'}}} className='relative'>
                        <Input
                            name='search'
                            placeholder='Search event'
                            className='border rounded-full border-gray-400 px-5 pl-8 mb-0 text-center bg-white my-6'
                            value={search}
                            onChange={(e)=>{setSearch(e.target.value)}}
                        />
                        <Search className='absolute top-2 left-3' fontSize='12px' color='disabled' />
                        <Button sx={{borderRadius:'25px',mt:1}} variant='contained'>Search<Search/></Button>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}

export default Hero;