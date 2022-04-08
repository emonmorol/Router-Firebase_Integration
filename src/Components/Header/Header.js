import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useFirebase();
  console.log(user);

  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        {user?.uid ? (
          <Link onClick={handleSignOut} to="/">
            Signout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <span>{user?.displayName && user.displayName}</span>
      </nav>
    </div>
  );
};

export default Header;
