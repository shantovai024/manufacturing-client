import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-mobile nested-dashboard">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-10">
                    <h2 className='text-center text-4xl'>Welcome to Dashboard</h2>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-primary text-primary-content">

                        <li><NavLink to='/dashboard/my-profile'>My Profile</NavLink></li>
                        <li><NavLink to='/dashboard/my-orders'>My Orders</NavLink></li>
                        <li><NavLink to='/dashboard/add-review'>Add A Review</NavLink></li>

                        <li><Link to='/dashboard/manageOrder'>Manage All Orders</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/makeAdmin'> Make Admin</Link></li>
                        <li><Link to='/dashboard/manageProducts'>  Manage Products</Link></li>

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;