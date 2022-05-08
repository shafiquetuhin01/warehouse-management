import React from 'react';

const Product = ({product}) => {
    const {url,name,_id,price,qty,supplier} = product;
    return (
        <div className='container col-md-6'>
            <h4>Name: {name}</h4>
            <img style={{width:'450px',height:'350px'}} src={url} alt="" />
       
        </div>
    );
};

export default Product;