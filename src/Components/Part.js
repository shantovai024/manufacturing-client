import React from 'react';
import { Link } from 'react-router-dom';

const Part = (props) => {
    let {name, supplierName, description, minOrder, price, quantity, img} = props.part
    return (
        <>
           <div className="single-part bordered">
            <img className='mb-6' src={img} alt="" />
            <h3 className='text-xl mb-4'>Name: {name}</h3>
            <h2 className='text-2xl text-green-500 mb-2'>Brand: {supplierName}</h2>
            <p className='mb-6 pr-8'>{description}</p>
            <h3 className='text-xl mb-4'>Min Order: {minOrder}</h3>
            <h4 className='text-xl mb-4'>Price: {price}</h4>
            <h3 className='text-xl'>Quantity: {quantity}</h3>
            <Link to='/purchase' className='btn btn-accent mt-4'>Buy Now</Link>
           </div>
        </>
    );
};

export default Part;