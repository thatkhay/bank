import React from "react";
import logo from "../images/citi-logo.svg";
import location from '../images/location.svg'
import globe from "../images/globe.svg";
const HomePage = () => {
  return (
    <div className="container max-w-full flex items-center flex-col border-2 border-red-600">
      <nav className=" max-w-full w-[90%] flex justify-between items-center border-2 border-red-600 px-4">
        <img src={logo} alt="logo" />
        <ul className="flex justify-between border-2 border-red-600 w-[10rem] ">
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
    </div>
  );
};

export default HomePage;
