import React from 'react';
import notFound from '../assets/images/others/not-found.png'

const Error404 = () => {
    return (
        <>
            <div className="not-found mx-auto p-8">
                <img src={notFound} alt="" />
            </div>
        </>
    );
};

export default Error404;