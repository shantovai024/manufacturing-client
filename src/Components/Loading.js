import React from 'react';

const Loading = () => {
    return (
        <>
            <div className="load-parent">
                <div className="load">
                <progress className="bg-red-500 progress w-56"></progress>
                </div>
            </div>
        </>
    );
};

export default Loading;