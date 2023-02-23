import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth)
    console.log(user);
    // console.log(user.displayName);

    const menuItems =
        <>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/portfolio'>PROTFOLIO</NavLink></li>
            <li><NavLink to='/blogs'>BLOGS</NavLink></li>
            <li>{user && (<NavLink to='/dashboard'>DASHBOARD</NavLink>)}</li>
            <li> {user ? (<NavLink to='/login' onClick={() => signOut(auth)}> <span className='bg-slate-100 p-1 text-black'>{user.displayName}</span> LOGOUT</NavLink>) : (<NavLink to='/login'>LOGIN</NavLink>) } </li>
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