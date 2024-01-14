import React from "react";
import logo from "../images/citi-logo.svg";
import { Link } from "react-router-dom";
import AddCardIcon from '@mui/icons-material/AddCard';
import SendIcon from '@mui/icons-material/Send';

const UserTransactionPage = () => {
  return (
    <div className="container max-w-full flex items-center flex-col">
      <Link to="/" className="flex justify-start w-[90%]">
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex items-center justify-between lg:w-[80%] md:w-[90%] xsm:w-[90%] sm:w-[90%] p-6 mt-4">
        <h5 className=" font-extrabold text-[1.5rem] text-blue-900">
          Hello Joe
        </h5>

        <div className="h-[3rem] w-[3rem] border-2 border-blue-900 rounded-[50%] ">
          <img src="" alt="" />
        </div>
      </div>
      <div className=" lg:w-[50%] md:w-[70%] sm:w-[80%] xsm:w-[80%] h-[10rem] bg-blue-600 px-20 py-10 flex flex-col items-center justify-center gap-2  rounded-lg mt-6">
        <p className="font-semibold text-slate-400">Total Savings</p>
        <p className="text-[2rem] text-white tracking-wider font-semibold">
          $600,000.10
        </p>
      </div>
      <div className="flex items-center justify-around lg:w-[50%] md:w-[70%] sm:w-[90%] xsm:w-[90%] pt-4">
        <div className="flex items-center justify-around h-[3rem] w-[10rem] bg-blue-400 rounded-md">
          Add Funds <AddCardIcon/>
        </div>
        <div className="flex items-center justify-around h-[3rem] w-[10rem] bg-green-400 rounded-md">
          Transfer Funds
          <SendIcon/>
        </div>
      </div>
      <div className="w-[90%] h-[10rem] border-2 rounded-md mt-4 ">

      </div>
    </div>
  );
};

export default UserTransactionPage;
