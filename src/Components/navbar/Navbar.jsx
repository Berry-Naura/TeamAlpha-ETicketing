import { Search } from '@mui/icons-material';
import { Button, FormControl, Input} from '@mui/material';
import React, { useState } from 'react';
import './navbar.css'

function Navbar(props) {
    const [search,setSearch]=useState('')
    return (
        <div className='py-4 fixed w-full bg-white z-50'>
            <div className='max-w-[80%] flex mx-auto justify-between items-center'>
                <div className='logo max-w-[15%]'>
                    <p className='text-2xl font-extrabold'>Eve<span className='text-blue-500'>n</span><span className='text-blue-500'>t</span>ix  </p>
                </div>
                <div className=' max-w-[70%] w-[100%] sm:flex hidden justify-between items-center gap-x-8'>
                    <ul className='list-none flex items-center gap-x-10 links cursor-pointer'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Create Event</li>
                    </ul>
                    <FormControl sx={{display:{md:'flex',sm:'none'}}} className='relative'>
                        <Input
                            name='search'
                            placeholder='Search event'
                            className='border rounded-full border-gray-400 px-5 pl-8 mb-0 text-center '
                            value={search}
                            onChange={(e)=>{setSearch(e.target.value)}}
                        />
                        <Search className='absolute top-2 left-3' fontSize='12px' color='disabled' />
                    </FormControl>
                    <Button variant='outlined'>login</Button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;