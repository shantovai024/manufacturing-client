import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-area px-8 py-8 text-white bg-slate-500">

                <div className="footer-top  flex">
                    <div className="footer-top-left w-1/2">
                        <h3 className='text-3xl mb-4'>Get in Touch</h3>
                        <ul>
                            <li>Cycle Inc.</li>
                            <li>9870 St Vincent Place, Glasgow, DC 45 Fr 45</li>
                            <li><a href="tel:(00) 1234 567 890">(00) 1234 567 890</a></li>
                            <li><a href="mailto:Support@info.com">Support@info.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-top-right w-1/2">
                        <h3 className='text-3xl text-green-500 mb-4'>Newsletter Sign Up</h3>
                        <p className='pr-8 text-xl mb-4'>Sign up to our newsletter and get exclusive offers and news you wont find anywhere else straight to your inbox!</p>
                        <form>
                            <input className='input input-bordered w-full max-w-xs' type="email" placeholder='Enter your Email Address' /> <br />
                            <button className='btn btn-accent mt-4'>Signup</button>
                        </form>
                    </div>
                </div>
                <div className="divider" />

                <div className="footer-bottom  flex">
                    <div className="footer-left w-2/5">
                        <div className="copyright text-sm-center text-md-start">
                            <p className='text-xl text-white'>All Rights Reserved &copy; {(new Date().getFullYear())} by <Link className='text-green-500' to="/">Cycle Guru</Link> </p>
                        </div>
                    </div>
                    <div className="w-3/5 footer-right text-end">
                        <ul >
                            <li className='hover:text-green-500'><Link to="#">Blog</Link></li>
                            <li className='hover:text-green-500'><Link to="#">Privacy</Link></li>
                            <li className='hover:text-green-500'><Link to="#">Faq</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;