import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Who Is There In The Products Components</h2>
      <h3>{user ? user.displayName : "No One Is Here"}</h3>
    </div>
  );
};

export default Products;
