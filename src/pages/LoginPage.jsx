import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/citi-logo.svg";

import { app } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";

const LoginPage = ({ onLogin }) => {
  const auth = getAuth(app);
  const navigate = useNavigate();
 const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', formData.email); // Log the email
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User logged in successfully');
      onLogin(); // Notify the parent component that login is successful
      navigate('/transaction'); // Redirect to the transaction page upon successful login
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError('Invalid email or password');
    }  finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="container max-w-full flex items-center justify-center flex-col p-10 h-[90vh]">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <form
        className="max-w-[50rem] sm:w-[100%] xsm:w-[100%] lg:w-[50%] md:w-[80%]  p-8 lg:items-start md:items-start xsm:items-center sm:items-center border-2 border-blue-900 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between xsm:flex-col sm:flex-col md:flex-row lg:flex-row ">
          <div className="flex flex-col mr-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="user@email.com"
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md "
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="*********"
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md"
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex items-center mt-2">
          <input type="checkbox" className=" h-6 w-6 mr-2 " />
          <p className=" text-[.8rem] ">Remember User ID</p>
        </div>
       {loading ? (
          <Loader/> // Show loader when loading is true
        ) : (
          <button
            onClick={handleSubmit}
            className="w-[100%] items-center justify-center h-[3rem] bg-blue-500 rounded-[.6rem] text-white font-bold mt-6 hover:bg-blue-900"
          >
            Sign In
          </button>
        )}
        <p className="text-[.8rem] text-center mt-4">
          {" "}
          Dont have an account ?{" "}
          <Link to="/sign-up" className=" text-blue-600 ">
            sign up
          </Link>
        </p>
      </form>
      <Link to="/" className=" flex  text-blue-600 mt-4 ">
        Home {">"}
      </Link>
    </div>
  );
};

export default LoginPage;
