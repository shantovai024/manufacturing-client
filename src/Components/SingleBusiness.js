import React from 'react';

const SingleBusiness = (props) => {
    let { icon, count, name } = props.business;
    return (
        <>
            <div className="single-business">
                <div className="business-icon">
                    <i className={icon}></i>
                </div>
                <div className="business-icon-statistics">
                    <h5>{count}</h5>
                </div>
                <div className="business-icon-title">
                    <h4>{name}</h4>
                </div>
            </div>
        </>
    );
};

export default SingleBusiness;