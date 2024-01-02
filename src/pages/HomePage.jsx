import React from "react";
import logo from "../images/citi-logo.svg";
import location from "../images/location.svg";
import globe from "../images/globe.svg";
import card from "../images/cards.jpg";
import Form from "../components/Form";
const HomePage = () => {
  return (
    <div className="container max-w-full flex items-center flex-col ">
      <nav className=" max-w-full w-[90%] flex justify-between items-center  px-4">
        <img src={logo} alt="logo" />
        <ul className="flex justify-between  w-[10rem] ">
          <li className=" text-[.7rem] flex items-center flex-col">
            <img src={location} alt="location" />
            <p className=" text-[.7rem] ">ATM/BRANCH</p>
          </li>
          <li className="text-[.7rem] flex items-center flex-col xsm:hidden sm:hidden lg:block md:block">
            <img src={globe} alt="globe" />
            <p className=" text-[.7rem] ">ESPANYOL</p>
          </li>
            <li className=" bg-slate-400 px-4 flex items-center mt-4 xsm:block sm:block lg:hidden md:hidden">
            <p className=" text-[.9rem] font-bold text-blue-900 ">Login</p>
          </li>
        </ul>
      </nav>
      <main className="flex items-center flex-col mt-4 w-[100%]">
        <div className="flex items-center  h-[3rem] mt-4  w-[100%] px-8 bg-slate-200 shadow-md xsm:hidden sm:hidden lg:block md:block">
          <div className="flex justify-between items-center  w-full px-8">
            <ul className="flex items-center justify-between w-[80%]  h-[3rem] px-8">
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer">
                Credict card
              </li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer">Banking</li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer">Lending</li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer">
                Investment
              </li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer">
                Wealth Management
              </li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer">
                Open account {">"}
              </li>
            </ul>
            <ul className="flex items-center justify-between h-[3rem]">
              <img src="" alt="" />
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer">
                How can we help ?
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between xsm:flex-col-reverse sm:flex-col-reverse lg:flex-row md:flex-row w-[100%]  px-8 mt-8">
          <div className="flex items-center xsm:flex-col-reverse sm:flex-col-reverse lg:flex-row md:flex-row">
            <div>
              <p className=" tracking-widest font-thin text-[1rem] text-gray-600 ">
                CITI® CREDIT CARDS
              </p>
              <h2 className=" font-extrabold text-[2rem] max-w-[25rem] ">
                Choose the right Citi® credit card for you
              </h2>
              <p className="max-w-[30rem]">
                Whether you want Cash Back, Great Airline Miles, Rewards for
                Costco Members, or a Low Intro Rate, the choice is all yours.
              </p>

              <button className="h-[3rem] w-[12rem] bg-blue-500 mt-8 rounded-[.6rem] text-white font-bold">Learn More</button>
            </div>
            <img src={card} alt="card" className="h-[12rem] max-w-[20rem]" />
          </div>
          <Form />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
