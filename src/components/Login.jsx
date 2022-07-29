import React from "react";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";

const Login = () => {
  return (
    <div className="max-w-[1640px] mx-auto bg-gray-300 flex justify-center items-center">
      <div className="rounded-xl px-8 py-10 flex flex-col justify-between bg-white w-[500px] h-[500px] m-3  ">
        {/* Buttons for Sign up O-auth*/}
        <button className="bg-white border-gray-200 rounded-3xl flex justify-center px-4 py-2  ">
          <FcGoogle size={20} className="mr-2 text-center" />
          <p className="font-bold">Sign in With Google</p>
        </button>
        <button className="bg-white border-gray-200 rounded-3xl flex justify-center px-4 py-2  ">
          <DiApple size={20} className="mr-2 text-center" />
          <p className="font-bold">Sign in With Google</p>
        </button>

        <p className="font-bold  text-center">Or</p>

        {/* Input for email */}
        <input
          type="text"
          placeholder="Phone, email , username"
          className="border p-3 rounded-3xl outline-none"
        />

        <button className="text-center font-bold text-white bg-black rounded-3xl p-2">
          Next
        </button>
        <button className="font-bold p-2 rounded-3xl text-center">
          Forgot Password
        </button>
      </div>
    </div>
  );
};

export default Login;
