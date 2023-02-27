import React from 'react';
import { toast } from 'react-toastify';
import { Fade } from 'react-reveal';

const ContactUS = () => {

    let handleContact = async (event) => {
        event.preventDefault()
        event.target.reset()

        let name = event.target.name.value;
        let email = event.target.email.value;
        let text = event.target.text.value;
        let subject = event.target.subject.value;

        toast.success("Thanks for your Message")
    }
    return (
        <>
            <div className="contact-area py-6 lg:py-16">
                <h2 className='text-4xl text-center mb-6 lg:mb-12'>Contact <span className='text-green-500'>Us</span></h2>
                <div className="contact-wrap lg:flex">
                    <div className="contact-left w-full lg:w-1/2 mb-4 p-6 lg:pr-8">
                        <Fade left delay={400}>
                            <form onSubmit={handleContact}>
                                <input className='input input-bordered w-full mb-4' name='name' type="text" placeholder='Enter Your Name' /> <br />
                                <input className='input input-bordered w-full mb-4' name='email' type="email" placeholder='Enter Your Email' /> <br />
                                <input className='input input-bordered w-full mb-4' name='subject' type="text" placeholder='Enter Your Subject' /> <br />
                                <textarea className='textarea textarea-accent w-full mb-4' name="text" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
                                <button className='btn btn-accent btn-lg'>Send</button>
                            </form>
                        </Fade>
                    </div>
                    <div className="contact-right w-full lg:w-1/2 mb-4 p-6 lg:pl-8">
                        <Fade right delay={800}>
                            <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98100.14540610003!2d90.3430340829719!3d23.972160989669284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1676979349654!5m2!1sen!2sbd"
                                width="600"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUS;