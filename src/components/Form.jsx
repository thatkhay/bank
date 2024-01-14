import React, { useState } from "react";
import { app } from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
  const auth = getAuth(app);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // If successful, you might want to redirect the user to another page
      console.log('User logged in successfully');
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <form
      className="max-w-[50rem] sm:w-[100%] xsm:w-[100%] lg:w-auto md:w-auto p-4 lg:items-start md:items-start xsm:items-center sm:items-center shadow-2xl xsm:hidden sm:hidden lg:block md:block"
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
            className="h-[3rem] w-[11rem] border-[.04px] border-gray-400 px-2 rounded-md "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="*********"
            className="h-[3rem] w-[11rem] border-[.04px] border-gray-400 px-2 rounded-md"
          />
        </div>
      </div>
      <div className="flex items-center mt-2">
        <input type="checkbox" className="h-6 w-6 mr-2" />
        <p className="text-[.8rem]">Remember User ID</p>
      </div>
      <button
        type="submit"
        className="w-[100%] items-center justify-center h-[3rem] bg-blue-500  rounded-[.6rem] text-white font-bold mt-6 hover:bg-blue-900"
      >
        Sign In
      </button>
      <p className="text-[.8rem] text-center mt-4">
        Forgot <span>UserID</span> or <span>Password</span>?
      </p>
    </form>
  );
};

export default LoginForm;
