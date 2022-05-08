import React, { useEffect, useState } from "react";
import img from "../../../images/hero.jpg";
import About from "../About/About";
import OtherServices from "../OtherServices/OtherServices";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://morning-peak-32661.herokuapp.com/collection")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);
  return (
    <div className="container text-center">
      <h2 className="text-center">Shafique Firm House</h2>
      <img
        style={{ height: "500px" }}
        className="w-100 img-fluid"
        src={img}
        alt=""
      />
      <h2 className="text-center mt-3">My Inventories</h2>
      <div className="d-flex justify-content-center m-3">
        <div className="row">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        
      </div>
      <About></About>
      <OtherServices></OtherServices>
    </div>
  );
};

export default Home;
