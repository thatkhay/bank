import React from "react";

const Form = () => {
  return (
    <form className="max-w-[50rem] sm:w-[100%] xsm:w-[100%] lg:w-auto md:w-auto  p-4 lg:items-start md:items-start xsm:items-center sm:items-center shadow-2xl xsm:hidden sm:hidden lg:block md:block">
      <div className="flex items-center justify-between xsm:flex-col sm:flex-col md:flex-row lg:flex-row ">
        <div className="flex flex-col mr-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="user@email.com"
            className="h-[3rem] w-[11rem] border-[.04px] border-gray-400 px-2 rounded-md "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="*********"
            className="h-[3rem] w-[11rem] border-[.04px] border-gray-400 px-2 rounded-md"
          />
        </div>
      </div>
      <div className="flex items-center mt-2">
        <input type="checkbox" className=" h-6 w-6 mr-2 " />
        <p className=" text-[.8rem] ">Remember User ID</p>
      </div>
      <button className=" w-[100%] items-center justify-center h-[3rem] bg-blue-500  rounded-[.6rem] text-white font-bold mt-6">
        Sign On
      </button>
      <p className="text-[.8rem] text-center mt-4">forgot <span>UserID</span> or <span>Password</span></p>
    </form>
  );
};

export default Form;