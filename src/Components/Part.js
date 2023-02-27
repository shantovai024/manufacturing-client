import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';

const Part = ({part}) => {
    let { name, _id, supplierName, description, minOrder, price, quantity, img } = part;

    let navigate = useNavigate()

    let navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }

    return (
        <>
            <div className="single-part bordered">
                <Fade bottom delay={300}>
                    <img className='mb-6' src={img} alt="" />
                    <h3 className='text-xl mb-4'>Name: {name}</h3>
                </Fade>
                <Fade bottom delay={600}>
                    <h2 className='text-2xl text-green-500 mb-2'>Brand: {supplierName}</h2>
                    <p className='mb-6 pr-8'>{description}</p>
                    <h3 className='text-xl mb-4'>Min Order: {minOrder}</h3>
                </Fade>
                <Fade bottom delay={900}>
                    <h4 className='text-xl mb-4'>Price: {price}</h4>
                    <h3 className='text-xl'>Quantity: {quantity}</h3>
                    <button onClick={() => navigateToPurchase(part._id)} className='btn btn-accent mt-4'>Buy Now</button>
                </Fade>
            </div>
        </>
    );
};

export default Part;