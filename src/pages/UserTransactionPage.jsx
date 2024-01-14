import React from "react";

const UserTransactionPage = () => {
  return (
    <div className="container max-w-full flex items-center flex-col">
      <div className="flex items-center justify-between lg:w-[80%] md:w-[90%] xsm:w-[90%] sm:w-[90%] border-2 border-blue-900 p-6 ">
        <h5 className="font-bold text-[2rem] text-blue-900">Hello Joe</h5>

        <div className="h-[3rem] w-[3rem] border-2 border-blue-900 rounded-[50%] ">
          <img src="" alt="" />
        </div>
      </div>
      <div className=" lg:w-[50%] md:w-[70%] sm:w-[80%] xsm:w-[80%] h-[10rem] bg-blue-600 px-20 py-10 flex flex-col items-center justify-center gap-2  rounded-lg mt-6">
<p className="font-semibold text-slate-400">Total Savings</p>
<p className="text-[2rem] text-white tracking-wider font-semibold">$600,000.10</p>
      </div>
    </div>
  );
};

export default UserTransactionPage;
