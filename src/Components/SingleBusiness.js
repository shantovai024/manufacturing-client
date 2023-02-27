import React from 'react';
import { Fade } from 'react-reveal';

const SingleBusiness = (props) => {
    let { icon, count, name } = props.business;
    return (
        <>
            <div className="single-business mb-4">
                <Fade left delay={300}>
                    <div className="business-icon">
                        <i className={icon}></i>
                    </div>
                </Fade>
                <Fade left delay={600}>
                    <div className="business-icon-statistics">
                        <h5>{count}</h5>
                    </div>
                </Fade>
                <Fade left delay={900}>
                    <div className="business-icon-title">
                        <h4>{name}</h4>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default SingleBusiness;