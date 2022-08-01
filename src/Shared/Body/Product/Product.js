import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Items/Loading";

const Product = ({ product }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { url, name, _id, price, qty, description, supplier } = product;

  // manage stock button
  const handleManage = () => {
    if (user) {
      navigate('/inventory');
    }
    else{
      navigate('/login');
    }
    
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div
      style={{ border: "1px solid gray" }}
      className="container col-md-6 my-3"
    >
      <h4 className="mt-2">Name: {name}</h4>
      <img style={{ width: "450px", height: "350px" }} src={url} alt="" />
      <h6>
        Short Description: <small>{description}</small>
      </h6>
      <h4>Price: {price}</h4>
      <h5>Quantity: {qty}</h5>
      <h5>Supplier Name: {supplier}</h5>
      <button onClick={handleManage} className="btn btn-primary mb-2">
        Manage Stock
      </button>
    </div>
  );
};

export default Product;
