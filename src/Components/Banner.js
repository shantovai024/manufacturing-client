import React from 'react';
import banner from '../../src/assets/images/banner/main_banner1.jpg'

const Banner = () => {
    return (
        <>
            <div className="banner-area px-4 py-4 columns-1 lg:columns-2  mt-8">
                <div className="banner-text">
                    <h4 className='text-xl text-green-600 mb-2'>Pedal your way to adventure</h4>
                    <h2 className='text-4xl mb-6'> Explore the world on two wheels!</h2>
                    <p className='text-2xl'>We celebrate the freedom and adventure that comes with exploring the world on two wheels. Whether you're a seasoned pro or a first-time rider, we're here to provide you with everything you need to get the most out of your cycling experiences.</p>
                    <button className='btn btn-primary mt-8 btn-lg'>Get Started</button>
                </div>
                <div className="banner-image">
                    <img src={banner} alt="" />
                </div>

            </div>
        </>
    );
};

export default Banner;