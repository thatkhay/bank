import React from "react";
import logo from "../images/citi-logo.svg";
import location from "../images/location.svg";
import globe from "../images/globe.svg";
const HomePage = () => {
  return (
    <div className="container max-w-full flex items-center flex-col ">
      <nav className=" max-w-full w-[90%] flex justify-between items-center  px-4">
        <img src={logo} alt="logo" />
        <ul className="flex justify-between  w-[10rem] ">
          <li className=" text-[.7rem] flex items-center flex-col">
            <img src={location} alt="" />
            <p className=" text-[.7rem] ">ATM/BRANCH</p>
          </li>
          <li className="text-[.7rem] flex items-center flex-col">
            <img src={globe} alt="" />
            <p className=" text-[.7rem] ">ESPANYOL</p>
          </li>
        </ul>
      </nav>
      <main className="flex items-center flex-col mt-4 w-[100%]">
        <div className="flex items-center  h-[3rem] mt-4  w-[100%] px-8 bg-slate-200">
          <div className="flex justify-between items-center  w-full px-8">
            <ul className="flex items-center justify-between w-[80%]  h-[3rem] px-8">
              <li className="text-[.9rem] font-bold text-blue-900">
                Credict card
              </li>
              <li className="text-[.9rem] font-bold text-blue-900">Banking</li>
              <li className="text-[.9rem] font-bold text-blue-900">Lending</li>
              <li className="text-[.9rem] font-bold text-blue-900">
                Investment
              </li>
              <li className="text-[.9rem] font-bold text-blue-900">
                Wealth Management
              </li>
              <li className="text-[.9rem] font-bold text-blue-900">
                Open account {">"}
              </li>
            </ul>
            <ul className="flex items-center justify-between h-[3rem]">
              <img src="" alt="" />
              <li className="text-[.9rem] font-bold text-blue-900">
                how can we
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
