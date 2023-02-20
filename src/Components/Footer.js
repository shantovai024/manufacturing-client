import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-area px-8 py-8 flex bg-slate-500">
                <div className="w-2/5">
                    <div className="footer-left ">
                        <div className="copyright text-sm-center text-md-start">
                            <p className='text-xl text-white'>All Rights Reserved &copy; {(new Date().getFullYear())} by <Link className='text-green-500' to="/">Cycle Guru</Link> </p>
                        </div>
                    </div>
                </div>
               <div className="w-3/5">
               <div className="footer-right text-end">
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