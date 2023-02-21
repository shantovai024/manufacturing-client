import React from 'react';

const ContactUS = () => {
    return (
        <>
            <div className="contact-area py-16">
                <h2 className='text-4xl text-center mb-12'>Contact <span className='text-green-500'>Us</span></h2>
                <div className="contact-wrap flex">
                    <div className="contact-left w-1/2 mb-4 pr-8">
                        <form>
                            <input className='input input-bordered w-full  mb-4' type="text" placeholder='Enter Your Name' /> <br />
                            <input className='input input-bordered w-full  mb-4' type="email" placeholder='Enter Your Email' /> <br />
                            <input className='input input-bordered w-full  mb-4' type="text" placeholder='Enter Your Subject' /> <br />
                            <textarea className='textarea textarea-accent w-full mb-4' name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
                            <button className='btn btn-accent btn-lg'>Send</button>
                        </form>
                    </div>
                    <div className="contact-right w-1/2 mb-4 pl-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98100.14540610003!2d90.3430340829719!3d23.972160989669284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1676979349654!5m2!1sen!2sbd" 
                        width="600" 
                        height="100%" 
                        style={{border: 0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUS;