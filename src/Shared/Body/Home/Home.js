import React from 'react';
import img from '../../../images/hero.jpg';

const Home = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Shafique Firm House</h2>
            <img style={{height:'450px'}} className='w-100 img-fluid' src={img} alt="" />
        </div>
    );
};

export default Home;