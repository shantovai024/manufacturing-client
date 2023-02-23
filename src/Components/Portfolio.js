import React from 'react';

const Portfolio = () => {
    return (
        <>
            <div className="portfolio-area py-12 ">
                <div className="portfolio-wrap border p-5 rounded-lg w-1/2 mx-auto">
                    <p> <span>Name:</span> Istiak Ahmed</p>
                    <p> <span>Email:</span> istiakahmed024@gmail.com</p>
                    <p> <span>Educational Background:</span> BA Honors in English, Varendra University Rajshahi</p>
                    <p> <span>Skills:</span> HTML, CSS, JAVASCRIPT, BOOTSTRAP, JQUERY, REACT, MONGODB, FIREBASE</p>
                    <p> <span>Projects Links:</span> <a className='text-green-500' href="https://ranar-client.vercel.app/" target="_blank" rel="noreferrer" >Ranar</a> <a className='text-green-500' href="https://spria.netlify.app" target="_blank" rel="noreferrer" >Spria</a> <a className='text-green-500' href="https://utrun.netlify.app/" target="_blank" rel="noreferrer" >Utran</a></p>
                </div>
            </div>
        </>
    );
};

export default Portfolio;