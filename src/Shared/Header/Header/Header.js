import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import app from "../../../firebase.init";
import logo from "../../../images/Logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import './Header.css';

const auth = getAuth(app);
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="header d-flex justify-content-between align-items-center container bg-dark">
      <img className="img-fluid" src={logo} alt="" />
      <div className="d-flex">
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        {user ? (
          <button className="bg-primary text-white" onClick={handleSignOut}>Sign out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
