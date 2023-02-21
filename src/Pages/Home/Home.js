import React from 'react';
import Banner from '../../Components/Banner';
import Brands from '../../Components/Brands';
import Business from '../../Components/Business';
import ContactUS from '../../Components/ContactUS';
import Parts from '../../Components/Parts';
import Reviews from '../../Components/Reviews';

const Home = () => {
    return (
        <>
            <Banner/>
            <Brands/>
            <Parts/>
            <Business/>
            <Reviews/>
            <ContactUS/>
        </>
    );
};

export default Home;