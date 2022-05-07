import React from "react";
import app from "../../../firebase.init";

import {
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";


const auth = getAuth(app);



const Login = () => {
  const provider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("tumi error khaiso", error);
      });
  };
  const handleSignInFb = () => {
    signInWithPopup(auth, fbProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("tumi error khaiso fb te", error);
      });
  };
  return (
    <div>
      <h2>This is login page</h2>
      <div style={{ textAlign: "center", padding: "10px " }}>
        <button onClick={handleSignIn}>Google Sign In</button>
        <button onClick={handleSignInFb}>Facebook Sign In</button>
      </div>
    </div>
  );
};

export default Login;
