import React from 'react';
import img from '../../../images/404.jpg';
const NotFound = () => {
    return (
        <div>
            <h2 className='text-warning text-center mt-3'>The page you are searching is not found !!!</h2>
            <img style={{height:'500px'}} className='img-fluid w-100' src={img} alt="" />
        </div>
    );
};

export default NotFound;