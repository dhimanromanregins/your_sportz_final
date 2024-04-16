import React from 'react';
import Header from './utils/Header';
import Footer from './utils/Footer';

const Feature = () => {
    return (
        <div className="wrapper">
            <Header />
   
                <div className="feature d-flex align-items-center justify-content-center">
                    <h2 className='text-center'>This page is under development</h2>
                </div>
     
            <Footer />
        </div>
    );
};

export default Feature;
