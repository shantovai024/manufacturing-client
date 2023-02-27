import React from 'react';
import { Puff } from 'react-loader-spinner';

const PreLoader = () => {
    return (
        <>
            <div className='pre-loader'>
                <Puff
                    height="100"
                    width="100"
                    radius={1}
                    color="#4777F4"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </>
    );
};

export default PreLoader;