import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Events from '../../Components/events/Events';

function Home(props) {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <Events filter={"Trending Events"} />
            <Events filter={"Upcoming Events"} />
        </div>
    );
}

export default Home;