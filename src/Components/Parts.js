import React, { useEffect, useState } from 'react';
import UseParts from '../hooks/UseParts';
import Part from './Part';

const Parts = () => {
    let [parts, setParts] = UseParts()

    return (
        <>
            <div className="parts-area py-6 lg:py-16">
                <h2 className='text-4xl text-center mb-4 lg:mb-12'> <span className='text-green-500'>Products</span> We Supply</h2>
                <div className="single-parts p-4 lg:p-0 grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {parts.map(part => (
                        <Part
                            key={part._id}
                            part={part}
                        ></Part>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Parts;