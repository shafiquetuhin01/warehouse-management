import React from "react";
import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";

const ManageItem = () => {
  const [products, setProducts] = useProduct();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://morning-peak-32661.herokuapp.com/collection/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage your Products</h2>
      {products.map((product) => (
        <div key={product._id}>
          <h5>
            {product.name}{" "}
            <Link to={`/update/${product._id}`}>
                <button className="btn">Update</button>
            </Link>
            <button onClick={() => handleDelete(product._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageItem;
