import React from 'react';

const Product = ({product}) => {
    const {url,name,_id,price,qty,supplier} = product;
    return (
        <div>
            <h4>Name: {name}</h4>
            <img src={url} alt="" />
        </div>
    );
};

export default Product;