import React from 'react'
import logo from "../images/citi-logo.svg";
import { Link } from 'react-router-dom';
const NotFounfPage = () => {
  return (
    <div className="container max-w-full flex items-center justify-between flex-col p-10 h-[80vh]">
      <img src={logo} alt="logo" />
        <h2 className='mt-10'> <span className=' text-blue-600  font-extrabold  text-[2rem]'>Page</span> <span className=' text-red-500 font-extrabold text-[2rem]'> not </span> <span className=' text-slate-300 font-extrabold text-[2rem]'>Found</span></h2>
        <Link to='/' className=" flex  text-blue-600 mt-4 ">Home {'>'}</Link>
    </div>
  )
}

export default NotFounfPage