import React from 'react';
import img from '../../../images/hoey.jpg';
import img2 from '../../../images/pigeon.jpg';

const OtherServices = () => {
    return (
        <div className='mt-3'>
            <h2>My Other Services</h2>
            <div className='d-flex justify-content-between'>
                <div>
                    <h3>Honey Collection</h3>
                    <img style={{width:'460px', height:'350px'}} src={img} alt="" />
                </div>
                <div>
                    <h3>Pigeon firming</h3>
                    <img style={{width:'460px', height:'350px'}} src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OtherServices;