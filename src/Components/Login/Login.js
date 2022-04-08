import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();

  return (
    <div className="border w-1/2 p-3 mx-auto mt-12">
      <h3 className="text-3xl mb-4">Please Login</h3>
      <button
        onClick={signInWithGoogle}
        className="mb-4 bg-blue-200 py-1 px-4 rounded-full shadow-lg w-full"
      >
        Google Sign In
      </button>
      <form>
        <input
          className="border p-2 rounded mb-3 w-full"
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
