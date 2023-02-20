import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const menuItems =
        <>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/protfolio'>PROTFOLIO</NavLink></li>
            <li><NavLink to='/blogs'>BLOGS</NavLink></li>
            <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
            <li><button className='btn btn-ghost'>LOGOUT</button></li>
            <li><NavLink to='/login'>LOGIN</NavLink></li>
            <li><NavLink to='/signup'>SIGN UP</NavLink></li>
        </>

    return (
        <>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Cycle Guru</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;