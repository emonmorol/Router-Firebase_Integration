import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="border w-1/2 p-3 mx-auto mt-12">
      <h3 className="text-3xl mb-4">Please Login</h3>
      <button
        onClick={handleSignIn}
        className="mb-4 bg-blue-200 py-1 px-4 rounded-full shadow-lg w-full"
      >
        Google Sign In
      </button>
      <form>
        <input
          className="border p-2 rounded mb-3 w-full"
          fro
          type="text"
          placeholder="Your Email"
        />{" "}
        <br />
        <input
          className="border p-2 rounded mb-3 w-full"
          type="Password"
          placeholder="Your Password"
        />{" "}
        <br />
        <input
          className="mb-4 bg-blue-300 py-1 px-4 rounded-full shadow-lg w-full"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
