import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


const Home =() =>{
    return (
        <>
        <Hero>
                <Banner
                    title="luxe kamers"
                    subtitle="delux kamers starten vanaf €250"
                >
                    <Link
                        to="/rooms"
                        className="btn-primary">
                        Onze kamers
                    </Link>  
                </Banner>
        </Hero>
        <Services />
            <FeaturedRooms />
            
        </> 
    )
}
export default Home;