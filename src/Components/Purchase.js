import React from 'react';

const Purchase = () => {
    return (
        <div>
            <h2>This is Purchase PAge</h2>
            <div className="purchase-form mx-auto w-1/2 mt-16 mb-16">
                <form>
                    <input className='input input-bordered w-full  mb-4' type="text" placeholder='Enter Your Name' /> <br />
                    <input className='input input-bordered w-full  mb-4' type="email" placeholder='Enter Your Email' /> <br />
                    <input className='input input-bordered w-full  mb-4' type="number" /> <br />
                    <input className='input input-bordered w-full  mb-4' type="text" placeholder='Enter Your Address' /> <br />
                    <input className='input input-bordered w-full  mb-4' type="number" placeholder='Enter Your Number' /> <br />
                    <textarea className='textarea textarea-accent w-full mb-4' name="" id=""  placeholder='Enter Your Message'></textarea>
                    <button className='btn btn-accent btn-lg'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;