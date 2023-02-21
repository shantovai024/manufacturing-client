import React from 'react';
import Carousel from 'react-multi-carousel';
import image1 from '../assets/images/brands/ss.png'
import image2 from '../assets/images/brands/tf.png'
import image3 from '../assets/images/brands/pd.png'
import image4 from '../assets/images/brands/wp.png'
import image5 from '../assets/images/brands/sp.png'

const Brands = () => {
    return (
        <div className='brands-area mx-auto mt-16'>
            <div className="brands-carousel-wrapper">
                <Carousel className="testimonial"
                    infinite={true}
                    draggable={true}
                    pauseOnHover={true}
                    slidesToSlide={1}
                    swipeable={true}
                    arrows={false}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 992
                            },
                            items: 5,
                        },
                        tablet: {
                            breakpoint: {
                                max: 991,
                                min: 577
                            },
                            items: 3,
                        },
                        mobile: {
                            breakpoint: {
                                max: 576,
                                min: 1
                            },
                            items: 1,
                        }
                    }}>
                        <div className="single-brand">
                            <img src={image1} alt="" />
                        </div>
                        <div className="single-brand">
                            <img src={image2} alt="" />
                        </div>
                        <div className="single-brand">
                            <img src={image3} alt="" />
                        </div>
                        <div className="single-brand">
                            <img src={image4} alt="" />
                        </div>
                        <div className="single-brand">
                            <img src={image5} alt="" />
                        </div>
                        <div className="single-brand">
                            <img src={image2} alt="" />
                        </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Brands;