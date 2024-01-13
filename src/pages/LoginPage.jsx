import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/citi-logo.svg";

const LoginPage = () => {
  return (
    <div className="container max-w-full flex items-center justify-center flex-col p-10 h-[90vh]">
         <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      <form className="max-w-[50rem] sm:w-[100%] xsm:w-[100%] lg:w-[50%] md:w-[80%]  p-8 lg:items-start md:items-start xsm:items-center sm:items-center border-2 border-blue-900 rounded-lg">
        <div className="flex items-center justify-between xsm:flex-col sm:flex-col md:flex-row lg:flex-row ">
          <div className="flex flex-col mr-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="user@email.com"
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md "
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="*********"
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" className=" h-6 w-6 mr-2 " />
          <p className=" text-[.8rem] ">Remember User ID</p>
        </div>
        <button className=" w-[100%] items-center justify-center h-[3rem] bg-blue-500  rounded-[.6rem] text-white font-bold mt-6 hover:bg-blue-900">
          Sign In
        </button>
        <p className="text-[.8rem] text-center mt-4">
          {" "}
          Dont have an account ?{" "}
          <Link to="/sign-up" className=" text-blue-600 ">
            sign up
          </Link>
        </p>
      </form>
      <Link to='/' className=" flex  text-blue-600 mt-4 ">Home {'>'}</Link>
    </div>
  );
};

export default LoginPage;
