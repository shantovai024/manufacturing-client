import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

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
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;