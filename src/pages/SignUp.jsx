import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/citi-logo.svg";
const SignUp = () => {
  return (
    <div className="container max-w-full flex items-center justify-center flex-col p-10 h-[95vh]">
         <img src={logo} alt="logo" />
      <form className="max-w-[50rem] sm:w-[100%] xsm:w-[100%] lg:w-[50%] md:w-[80%]  p-4 lg:items-start md:items-start xsm:items-center sm:items-center border-2 border-blue-900 rounded-lg">
        <div className="flex items-center justify-between xsm:flex-col sm:flex-col md:flex-row lg:flex-row ">
          <div className="flex flex-col mr-2">
            <label htmlFor="text">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md mb-4  "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="user@email.com"
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md mb-4 "
            />
          </div>
        </div>
        <div className="flex items-center justify-between xsm:flex-col sm:flex-col md:flex-row lg:flex-row ">
          <div className="flex flex-col mr-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="*********"
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md mb-4  "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="*********"
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md mb-4 "
            />
          </div>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" className=" h-6 w-6 mr-2 " />
          <p className=" text-[.8rem] ">Remember User ID</p>
        </div>
        <button className=" w-[100%] items-center justify-center h-[3rem] bg-blue-500  rounded-[.6rem] text-white font-bold mt-6 hover:bg-blue-900">
          Sign Up
        </button>
        <p className="text-[.8rem] text-center mt-4">
           Have an account ? <Link to='/log-in' className=' text-blue-600 '>login</Link>
        </p>
      </form>
      <Link to='/' className=" flex  text-blue-600 mt-4 ">Home {'>'}</Link>
    </div>
  );
};

export default SignUp;
