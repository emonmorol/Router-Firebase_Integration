import React from "react";

const Register = () => {
  return (
    <div className="border w-1/2 p-3 mx-auto mt-12">
      <h3 className="text-3xl mb-5">Please Register Now</h3>
      <form>
        <input
          className="border p-2 rounded mb-3 w-full"
          type="text"
          placeholder="Your Name"
        />{" "}
        <br />
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
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
