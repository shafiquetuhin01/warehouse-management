import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid text-white bg-dark mt-3">
      <div className="container py-3">
    <p className="text-center pt-3">All rights reserved &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
