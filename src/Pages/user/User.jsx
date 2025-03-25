import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Footer from '../../Components/footer/Footer';
import Events from '../../Components/events/Events';
import Filter from './components/Filter';
import { Divider } from '@mui/material';

function User() {
    return (
        <div className=''>
            <Navbar />
            <Divider />
            <Filter />
            <Events filter={"Trending Events"} />
            <Events filter={"Upcoming Events"} />
            <Events filter={"Concerts"} />
            <Events filter={"Comedy"} />
            <br />
            <Footer />
        </div>
    );
}

export default User;