import React from "react";
import Home from "../images/house.png";
import Google from "../images/googleplay.png";
import AppStore from "../images/appstore.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Youtube from "../images/youtube.png";
import Footerlogo from "../images/citiredesign-footer.svg";

const Footer = () => {
  return (
    <footer className="container max-w-full flex items-center flex-col  bg-black justify-around px-10 py-6 ">
         <img src={Footerlogo} alt="Footerlogo" />
      <div className=" max-w-full w-[100%] lg:flex md:hidden xsm:hidden sm:hidden items-center bg-black justify-around px-10 py-6 lg:flex-row md:flex-col sm:flex-col xsm:flex-col  ">
        <div className="flex flex-col  w-[100%]">
          <p className=" font-bold text-white ">Why Citi</p>
          <p className=" text-white text-[.6rem]">Our story</p>
          <p className=" text-white text-[.6rem]">Careers</p>
          <p className=" text-white text-[.6rem]">Reward</p>
          <p className=" text-white text-[.6rem]">Special offers</p>
        </div>
        <div className="flex flex-col  w-[100%]">
          <p className=" font-bold text-white ">Why Citi</p>
          <p className=" text-white text-[.6rem]">Our story</p>
          <p className=" text-white text-[.6rem]">Careers</p>
          <p className=" text-white text-[.6rem]">Reward</p>
          <p className=" text-white text-[.6rem]">Special offers</p>
        </div>
        <div className="flex flex-col  w-[100%]">
          <p className=" font-bold text-white ">Why Citi</p>
          <p className=" text-white text-[.6rem]">Our story</p>
          <p className=" text-white text-[.6rem]">Careers</p>
          <p className=" text-white text-[.6rem]">Reward</p>
          <p className=" text-white text-[.6rem]">Special offers</p>
        </div>
        <div className="flex flex-col  w-[100%]">
          <p className=" font-bold text-white ">Why Citi</p>
          <p className=" text-white text-[.6rem]">Our story</p>
          <p className=" text-white text-[.6rem]">Careers</p>
          <p className=" text-white text-[.6rem]">Reward</p>
          <p className=" text-white text-[.6rem]">Special offers</p>
        </div>
        <img src={Home} alt="Home" />
        
      </div>
       <div className="max-w-[full] w-[90%] flex items-center justify-between mt-6 lg:flex-row md:flex-col xsm:flex-col sm:flex-col gap-6 ">
        <div className="flex">
            <img src={Google} alt="Google" className="h-[2.5rem] w-[7rem] pr-2" />
            <img src={AppStore} alt="AppStore" className="h-[2.5rem] w-[7rem]" />
        </div>
        
        <div className="flex">
            <img src={Facebook} alt="Facebook"  className="h-[1rem] w-[1.5rem] pr-2" />
            <img src={Twitter} alt="Twitter"  className="h-[1rem] w-[1.5rem] pr-2"/>
            <img src={Youtube} alt="Youtube"  className="h-[1rem] w-[1.5rem]"/>
        </div>
        <p className="text-white text-[.6rem]">© 2024 Citigroup Inc</p>
      </div> 
     
      <div className="flex items-center justify-around flex-col mt-8">
        <p className=" max-w-[80%] text-white text-[.6rem] mb-6 font-semibold">Important Legal Disclosures & Information</p>
        <p className=" max-w-[80%] text-white text-[.6rem] mb-6">Citibank.com provides information about and access to accounts and financial services provided by Citibank, N.A. and its affiliates in the United States and its territories. It does not, and should not be construed as, an offer, invitation or solicitation of services to individuals outside of the United States.</p>
        <p className=" max-w-[80%] text-white text-[.6rem] mb-6">Terms, conditions and fees for accounts, products, programs and services are subject to change. Not all accounts, products, and services as well as pricing described here are available in all jurisdictions or to all customers. Your eligibility for a particular product and service is subject to a final determination by Citibank. Your country of citizenship, domicile, or residence, if other than the United States, may have laws, rules, and regulations that govern or affect your application for and use of our accounts, products and services, including laws and regulations regarding taxes, exchange and/or capital controls that you are responsible for following.</p>
        <p className=" max-w-[80%] text-white text-[.6rem] mb-6">The products, account packages, promotional offers and services described in this website may not apply to customers of International Personal Bank U.S. in the Citigold® Private Client International, Citigold® International, Citi International Personal, Citi Global Executive Preferred, and Citi Global Executive Account Packages.</p>
      </div>

    </footer>
  );
};

export default Footer;
