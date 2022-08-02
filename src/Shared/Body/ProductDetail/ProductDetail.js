import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/collection/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div style={{border:"2px solid green"}} className="w-50">
      <img src={product.url} alt="" />
      <h4>Name: {product.name}</h4>
      <h4>Description: {product.description}</h4>
      <h4>Price: {product.price}</h4>
      <h5>Quantity: {product.qty}</h5>
      <h5>Supplier Name: {product.supplier}</h5>
      <div style={{ textAlign: "center" }}>
        <Link to="/checkout">
          <button className="btn btn-primary">Check Out</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
