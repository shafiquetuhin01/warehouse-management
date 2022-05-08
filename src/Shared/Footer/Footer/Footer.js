import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid text-white bg-dark mt-3">
      <div className="container py-3">
          <div className="d-flex border w-50">
          <div>
              <h5>Contact with me: </h5>
              <h6><input type="email" placeholder="your email" /></h6>
              <h6><input type="text" placeholder="your phone" /></h6>
              <button className="btn btn-secondary">Submit</button>
          </div>
          <div className="mt-4 ms-2">
              <textarea placeholder="please write your requirement" name="" id="" cols="45" rows="5"></textarea>
          </div>
          </div>
          
        <p className="text-center pt-3">
          All rights reserved &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
