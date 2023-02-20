import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';

const Reviews = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i class="fa-solid fa-arrow-right"></i></button>;
    };
    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i class="fa-solid fa-arrow-left"></i></button>;

    };

    return (
        <>
            <div className="reviews-area px-16 py-16 ">
                <div className="w-3/4 mx-auto">
                    <h2 className='text-center text-4xl mb-16'>Check What’s Our Client Say <span className='text-green-500'>About Us</span></h2>

                    <div className="testimonial-wrapper">
                        <Carousel className="testimonial"
                            infinite={true}
                            draggable={true}
                            pauseOnHover={true}
                            slidesToSlide={1}
                            swipeable={true}
                            customRightArrow={<CustomRightArrow />}
                            customLeftArrow={<CustomLeftArrow />}
                            autoPlaySpeed={3000}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 992
                                    },
                                    items: 1,
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 991,
                                        min: 577
                                    },
                                    items: 1,
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 576,
                                        min: 1
                                    },
                                    items: 1,
                                }
                            }}>
                            <div className="testimonial-item">
                                <div className="testimonial-icon text-center text-5xl">
                                    <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <div className="testimonial-text text-center ">
                                    <p className='text-xl'>I have been an avid cyclist for years, and I have to say that my experience with this website has been nothing short of excellent. The selection of high-quality bicycles and accessories is unparalleled, and the knowledgeable staff has always been ready to help me find exactly what I need.</p>
                                </div>
                                <div className="test-person-wrap text-center">
                                    <h5 className="text-2xl mb-4 mt-4 font-bold"><Link to="#">- Jenifer Aston</Link></h5>
                                    <p className="designation text-xl mb-4">Cyclist</p>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <div className="testimonial-icon text-center text-5xl">
                                    <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <div className="testimonial-text text-center ">
                                    <p className='text-xl'>I highly recommend this website to any cyclist looking for a one-stop-shop for all their cycling needs. And with competitive pricing and fast shipping, I never have to wait long to get back out on the road With top-notch products and outstanding customer service, it truly is the best of the best.</p>
                                </div>
                                <div className="test-person-wrap text-center">
                                    <h5 className="text-2xl mb-4 mt-4 font-bold"><Link to="#">- Mike Anderson</Link></h5>
                                    <p className="designation text-xl mb-4">Cyclist</p>
                                </div>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;