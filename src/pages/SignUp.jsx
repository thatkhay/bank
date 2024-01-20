// SignUp.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/citi-logo.svg";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../firebaseConfig";
import Loader from "../components/Loader";

const SignUp = () => {
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const navigate = useNavigate();
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    displayNumber: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear password error when changing password or confirmPassword
    if (name === "password" || name === "confirmPassword") {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    if (formData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
       setLoading(true); // Start loading state
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Access the user information if needed
      const user = userCredential.user;

      // Set display name
      await updateProfile(user, {
        displayName: formData.displayName,
      });

      // Save displayNumber to Firestore
      await setDoc(doc(firestore, "users", user.uid), {
        displayNumber: formData.displayNumber,
      });

      setSignupSuccess(true);
      navigate("/log-in");

      console.log("User created:", user);
    } catch (error) {
      console.error("Error creating user:", error.message);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="container max-w-full flex items-center justify-center flex-col p-10 h-[95vh]">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <form className="max-w-[50rem] sm:w-[100%] xsm:w-[100%] lg:w-[50%] md:w-[80%]  p-4 lg:items-start md:items-start xsm:items-center sm:items-center border-2 border-blue-900 rounded-lg">
        <div className="flex items-center justify-between xsm:flex-col sm:flex-col md:flex-row lg:flex-row ">
          <div className="flex flex-col mr-2">
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="displayName"
              placeholder="John Doe"
              value={formData.displayName}
              onChange={handleChange}
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md mb-4  "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@email.com"
              value={formData.email}
              onChange={handleChange}
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md mb-4 "
            />
          </div>
        </div>
        <div className="flex items-center justify-between xsm:flex-col sm:flex-col md:flex-row lg:flex-row ">
          <div className="flex flex-col mr-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              value={formData.password}
              onChange={handleChange}
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md mb-4  "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="*********"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md mb-4 "
            />
          </div>
          <div className="flex flex-col">
        <label htmlFor="displayNumber">Display Number</label>
        <input
          type="number"
          name="displayNumber"
          placeholder="12345"
          value={formData.displayNumber}
          onChange={handleChange}
          className="h-[3rem] w-[16rem] border-[.04px] border-gray-400 px-2 rounded-md mb-4"
        />
      </div>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" className=" h-6 w-6 mr-2 " />
          <p className=" text-[.8rem] ">Remember User ID</p>
        </div>
        {passwordError && (
          <p className="text-red-500 text-sm mt-2">{passwordError}</p>
        )}
        {signupSuccess && (
          <p className="text-green-500 text-sm mt-2">
            Sign up successful! Please login.
          </p>
        )}
         {loading ? (
          <Loader/> // Show loader when loading is true
        ) : (
          <button
            onClick={handleSubmit}
            className="w-[100%] items-center justify-center h-[3rem] bg-blue-500 rounded-[.6rem] text-white font-bold mt-6 hover:bg-blue-900"
          >
            Sign Up
          </button>
        )}
        <p className="text-[.8rem] text-center mt-4">
          Have an account ?{" "}
          <Link to="/log-in" className=" text-blue-600 ">
            Login
          </Link>
        </p>
      </form>
      <Link to="/" className=" flex  text-blue-600 mt-4 ">
        Home {">"}
      </Link>
    </div>
  );
};

export default SignUp;