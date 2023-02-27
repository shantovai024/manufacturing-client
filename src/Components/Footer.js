import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Fade } from 'react-reveal';

const Footer = () => {
    let handleFooter = event => {
        event.preventDefault()
        event.target.reset()

        let email = event.target.email.value;
        toast.success("Subscribe SuccessFully")
    }
    return (
        <>
            <div className="footer-area p-6 lg:p-16 text-white bg-slate-500">
                <div className="footer-top lg:flex">
                    <div className="footer-top-left w-full lg:w-1/2">
                        <Fade left delay={300}>
                            <h3 className='text-3xl mb-4'>Get in Touch</h3>
                            <ul>
                                <li>Cycle Inc.</li>
                                <li>9870 St Vincent Place, Glasgow, DC 45 Fr 45</li>
                                <li><a href="tel:(00) 1234 567 890">(00) 1234 567 890</a></li>
                                <li><a href="mailto:Support@info.com">Support@info.com</a></li>
                            </ul>
                        </Fade>
                    </div>
                    <div className="footer-top-right w-full lg:w-1/2">
                        <Fade left delay={600}>
                            <h3 className='text-3xl text-green-500 mb-4'>Newsletter Sign Up</h3>
                            <p className='pr-8 text-xl mb-4'>Sign up to our newsletter and get exclusive offers and news you wont find anywhere else straight to your inbox!</p>
                            <form onSubmit={handleFooter}>
                                <input className='input input-bordered w-full max-w-xs' type="email" placeholder='Enter your Email Address' name='email' /> <br />
                                <button className='btn btn-accent mt-4'>Signup</button>
                            </form>
                        </Fade>
                    </div>
                </div>

                <div className="divider" />

                <div className="footer-bottom lg:flex">
                    <div className="footer-left w-full lg:w-2/5">
                        <Fade left delay={800}>
                            <div className="copyright text-sm-center text-md-start">
                                <p className='text-xl text-white'>All Rights Reserved &copy; {(new Date().getFullYear())} by <Link className='text-green-500' to="/">Cycle Guru</Link> </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="w-full lg:w-3/5 footer-right text-center  md:text-end">
                        <Fade left delay={1000}>
                            <ul >
                                <li className='hover:text-green-500'><Link to="#">Blog</Link></li>
                                <li className='hover:text-green-500'><Link to="#">Privacy</Link></li>
                                <li className='hover:text-green-500'><Link to="#">Faq</Link></li>
                            </ul>
                        </Fade>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;