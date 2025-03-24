import { GppGood, PsychologyAlt, QuestionAnswerOutlined, QuestionMark } from '@mui/icons-material';
import { Paper } from '@mui/material';
import React from 'react';
import img from '../../../../Assets/image3.jpg'

function Choose(props) {
    return (
        <div className='bg-gray-50 my-[2em] pb-12'>
            <div className='max-w-[80%] mx-auto'>
                <p className='text-3xl font-bold py-8 text-center font-[cursive]'>Why Book With Us <PsychologyAlt fontSize='large' /> </p>
                <div className='w-full flex justify-between'>
                    <div className='w-[45%] sm:flex hidden'>
                        <img src={img} className='w-full h-full object-cover' alt='image' />
                    </div>
                    <div className='sm:w-1/2 flex flex-col gap-y-4'>
                        <div className='w-full flex justify-start'>
                            <p className=' shadow-lg'>
                                <Paper sx={{p:4}}>
                                    <span className='font-bold'><GppGood color='success' /> Easy & Secure Booking  </span>
                                    - A hassle-free ticketing experience
                                    <span className='text-2xl shadow-md rounded-full p-5 font-extrabold font-[cursive] ml-3'>1</span>
                                </Paper>
                            </p>
                        </div>
                        <div className='w-full flex justify-end'>
                            <p className='shadow-lg'>
                                <Paper sx={{p:4}}>
                                    <span className='font-bold'><GppGood color='success' /> Exclusive Deals </span>
                                    - Get special discounts and early bird offers
                                    <span className='text-2xl shadow-md rounded-full p-5 font-extrabold font-[cursive] ml-3'>2</span>
                                </Paper>
                            </p>
                        </div>
                        <div className='w-full flex justify-start'>
                            <p className='shadow-lg'>
                                <Paper sx={{p:4}}>
                                    <span className='font-bold'><GppGood color='success' /> Verified Tickets </span>
                                    - 100% authentic and reliable
                                    <span className='text-2xl shadow-md rounded-full p-5 font-extrabold font-[cursive] ml-3'>3</span>
                                </Paper>
                            </p>
                        </div>
                        <div className='w-full flex justify-end'>
                            <p className='shadow-lg'>
                                <Paper sx={{p:4}}>
                                    <span className='font-bold'><GppGood color='success' /> 24/7 Customer Support </span>
                                    - We're here whenever you need us
                                    <span className='text-2xl shadow-md rounded-full p-5 font-extrabold font-[cursive] ml-3'>4</span>
                                </Paper>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;