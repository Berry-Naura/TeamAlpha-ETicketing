import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Events from '../../Components/events/Events';
import Choose from './components/Choose_Us/Choose';
import Testimonials from './components/testimonials/Testimonials';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from '../../Components/footer/Footer';

function Home(props) {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <Events filter={"Trending Events"} />
            <Events filter={"Upcoming Events"} />
            <br />
            <Choose />
            <Testimonials />
            <br />
            <NewsLetter />
            <br />
            <Footer />
        </div>
    );
}

export default Home;