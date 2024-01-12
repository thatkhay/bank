import React from "react";
import logo from "../images/citi-logo.svg";
import location from "../images/location.svg";
import globe from "../images/globe.svg";
import card from "../images/cards.jpg";
import family1 from "../images/family.jpg";
import family2 from "../images/family2.jpg";
import multicard from "../images/multicard.jpg";
import secOneImg from "../images/secone.jpg";
import Form from "../components/Form";
const HomePage = () => {
  return (
    <div className="container max-w-full flex items-center flex-col ">
      <nav className=" max-w-full w-[90%] flex justify-between items-center  px-4">
        <img src={logo} alt="logo" />
        <ul className="flex justify-between  w-[10rem] ">
          <li className=" text-[.7rem] flex items-center flex-col xsm:hidden sm:hidden lg:flex md:flex">
            <img src={location} alt="location" />
            <p className=" text-[.7rem] ">ATM/BRANCH</p>
          </li>
          <li className="text-[.7rem] flex items-center flex-col xsm:hidden sm:hidden lg:flex md:flex">
            <img src={globe} alt="globe" />
            <p className=" text-[.7rem] ">ESPANYOL</p>
          </li>

          <p className="text-[.9rem] font-bold items-center text-blue-900  pt-5 xsm:block sm:block lg:hidden md:hidden ml-24">
            Login
          </p>
        </ul>
      </nav>
      <main className="flex items-center flex-col mt-4 w-[100%]">
        <div className="flex items-center  h-[3rem] mt-4  w-[100%] px-8 bg-slate-200 shadow-md xsm:hidden sm:hidden lg:block md:block">
          <div className="flex justify-between items-center  w-full px-8">
            <ul className="flex items-center justify-between w-[80%]  h-[3rem] px-8">
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer">
                Credict card
              </li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer hover:text-black">
                Banking
              </li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer hover:text-black">
                Lending
              </li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer hover:text-black">
                Investment
              </li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer hover:text-black">
                Wealth Management
              </li>
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer hover:text-black">
                Open account {">"}
              </li>
            </ul>
            <ul className="flex items-center justify-between h-[3rem]">
              <img src="" alt="" />
              <li className="text-[.9rem] font-bold text-blue-900 cursor-pointer hover:text-black">
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

              <button className="h-[3rem] w-[12rem] bg-blue-500 mt-8 rounded-[.6rem] text-white font-bold hover:bg-blue-900">
                Learn More
              </button>
            </div>
            <img src={card} alt="card" className="h-[12rem] max-w-[20rem]" />
          </div>
          <Form />
        </div>
        <ul className="flex items-center justify-around h-[6rem] mt-8 w-[98%] px-8 border-[.04px] rounded-md border-gray-400 shadow-md xsm:hidden sm:hidden lg:flex md:flex">
          <li className=" font-bold text-blue-900 text-[.8rem] hover:text-black cursor-pointer">
            Credit Cards
          </li>
          <li className=" font-bold text-blue-900 text-[.8rem] hover:text-black cursor-pointer">
            Checking Solutions
          </li>
          <li className=" font-bold text-blue-900 text-[.8rem] hover:text-black cursor-pointer">
            Mortgage
          </li>
          <li className=" font-bold text-blue-900 text-[.8rem] hover:text-black cursor-pointer">
            Personal Loans
          </li>
          <li className=" font-bold text-blue-900 text-[.8rem] hover:text-black cursor-pointer">
            Investing Options
          </li>
          <li className=" font-bold text-blue-900 text-[.8rem] hover:text-black cursor-pointer">
            Small Business
          </li>
        </ul>
        <div className="flex items-center justify-between w-[100%] sm:flex-col xsm:flex-col md:flex-row lg:flex-row mt-10 p-8 gap-8">
          <div className="mb-8   lg:w-[33%] md:w-auto xsm:w-[20rem] sm:w-[10rem] flex flex-col lg:items-start md:items-center xsm:items-center sm:items-center lg:border-none md:border-2 xsm:border-2 sm:border-2 border-blue-900 p-6 rounded-md  hover:bg-slate-300">
            <p className=" font-bold text-blue-900 text-[.9rem] mb-4">
              Simplified Banking
            </p>
            <img
              src={family1}
              alt="family1"
              className=" max-w-[100%]  lg:w-auto md:w-auto xsm:w-[20rem] sm:w-[10rem] rounded-lg"
            />
            <p className=" my-6 ">
              Citi mobile banking allows you to manage your money and pay
              friends — all while on-the-go. Member FDIC.
            </p>
            <button className="h-[3rem] w-[12rem] bg-blue-500  rounded-[.6rem] text-white font-bold hover:bg-blue-900">
              Learn More
            </button>
          </div>
          <div className="mb-8 lg:w-[33%] md:w-auto xsm:w-[20rem] sm:w-[10rem] flex flex-col lg:items-start md:items-center xsm:items-center sm:items-center lg:border-none md:border-2 xsm:border-2 sm:border-2 border-blue-900 p-6 rounded-md  hover:bg-slate-300">
            <p className=" font-bold text-blue-900 text-[.9rem] mb-4">
              Simplify your savings
            </p>
            <img
              src={family2}
              alt=""
              className=" max-w-[100%] lg:w-auto md:w-auto xsm:w-[20rem] sm:w-[10rem] rounded-lg"
            />
            <p className=" my-6 ">
              24/7 access to digital tools and money transfers with security you
              can bank on. Member FDIC
            </p>
            <button className="h-[3rem] w-[12rem] bg-blue-500  rounded-[.6rem] text-white font-bold hover:bg-blue-900">
              Learn More
            </button>
          </div>
          <div className="mb-8 lg:w-[33%] md:w-auto xsm:w-[20rem] sm:w-[10rem] flex flex-col lg:items-start md:items-center xsm:items-center sm:items-center lg:border-none md:border-2 xsm:border-2 sm:border-2 border-blue-900 p-6 rounded-md hover:bg-slate-300 ">
            <p className=" font-bold text-blue-900 text-[.9rem] mb-4">
              Explore Citi® / AAdvantage® Credit Cards
            </p>
            <img
              src={multicard}
              alt=""
              className=" max-w-[100%] lg:w-auto md:w-auto xsm:w-[20rem] sm:w-[10rem] rounded-lg"
            />
            <p className=" my-6 ">
              Whether you're a frequent flyer or first—time passenger, Citi has
              an airline rewards credit card to meet your travel needs.
            </p>
            <button className="h-[3rem] w-[12rem] bg-blue-500  rounded-[.6rem] text-white font-bold hover:bg-blue-900">
              Learn More
            </button>
          </div>
        </div>
        <div className=" w-[90%] border-2  px-10 py-5 flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col items-center mb-4 lg:border-none md:border-2 xsm:border-2 sm:border-2 border-black rounded-md">
          <img src={secOneImg} alt="secOneImg" className=" rounded-lg "/>
          <div>
            <p className=" tracking-widest font-thin text-[1rem] text-gray-600 ">
              LIFE AND MONEY BY CITI
            </p>
            <h4 className="font-extrabold text-[2rem] max-w-[30rem] ">
              Closing the Racial Wealth Gap
            </h4>
            <p>
              These are some keys to help create equitable pathways to income
              growth.
            </p>
            <button className="h-[3rem] w-[12rem] bg-blue-500  rounded-[.6rem] text-white font-bold hover:bg-blue-900 mt-8 ">
              Learn More
            </button>
          </div>
        </div>
        <div className=" w-[90%] border-2  px-10 py-5 flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col  items-center mb-4 lg:border-none md:border-2 xsm:border-2 sm:border-2 border-black rounded-md">
          <div>
            <p className=" tracking-widest font-thin text-[1rem] text-gray-600 ">
              CITI® CHECKING ACCOUNTS
            </p>
            <h4 className="font-extrabold text-[2rem] max-w-[30rem] ">
             Unlock checking that grows with you
            </h4>
            <p>
             The higher your balances, the more benefits and services you can enjoy from Citi Relationship Tiers.
            </p>
            <button className="h-[3rem] w-[12rem] bg-blue-500  rounded-[.6rem] text-white font-bold hover:bg-blue-900 mt-8 ">
              Learn More
            </button>
          </div>
          <img src="" alt="" className=" rounded-lg " />
        </div>
        <div className=" w-[90%] border-2  px-10 py-5 flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col items-center mb-4 lg:border-none md:border-2 xsm:border-2 sm:border-2 border-black rounded-md ">
          <img src="" alt="" className=" rounded-lg "/>
          <div>
            <p className=" tracking-widest font-thin text-[1rem] text-gray-600 ">
             RACIAL EQUITY AT CITI
            </p>
            <h4 className="font-extrabold text-[2rem] max-w-[30rem] ">
             Action for Racial Equity
            </h4>
            <p>
              We're marshaling the talent and capabilities of our institution like never before to help communities of color build wealth and strong financial futures.
            </p>
            <button className="h-[3rem] w-[12rem] bg-blue-500  rounded-[.6rem] text-white font-bold hover:bg-blue-900 mt-8 ">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
