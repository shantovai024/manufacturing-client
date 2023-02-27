import React from 'react';
import SingleBusiness from './SingleBusiness';

const Business = () => {

    let BusinessSummary = [
        { id: 1, name: "Happy Client", count: 500, icon: "fa-solid fa-users" },
        { id: 2, name: "Shipped Order", count: 1200, icon: "fa-solid fa-truck-fast" },
        { id: 3, name: "Country", count: 50, icon: "fa-solid fa-globe" },
        { id: 4, name: "FeedBack", count: 800, icon: "fa-solid fa-comment" }
    ]

    return (
        <>
            <div className="business-area text-center p-6 lg:p-12">
                <h3 className='text-3xl mt-8'>Gear Up Your Business with Our Comprehensive <span className='text-green-500'>Cycling Solutions </span> </h3>
                <div className="single-business-wrap grid grid-cols-2 md:grid-cols-4 mt-6 md:mt-16">
                    {
                        BusinessSummary.map(business => <SingleBusiness id={business.id} business={business}> </SingleBusiness>)
                    }
                </div>
            </div>
        </>
    );
};

export default Business;