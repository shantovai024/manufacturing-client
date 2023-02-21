import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    let [parts, setParts] = useState([])
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <>
            <div className="parts-area py-16">
                <h2 className='text-4xl text-center mb-12'> <span className='text-green-500'>Products</span> We Supply</h2>
                <div className="single-parts grid grid-cols-3 gap-5">
                    {parts.map(part => (
                        <Part key={part._id} part={part}></Part>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Parts;