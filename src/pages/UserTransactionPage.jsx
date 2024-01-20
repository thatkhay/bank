import React, { useEffect, useState } from "react";
import logo from "../images/citi-logo.svg";
import { Link } from "react-router-dom";
import AddCardIcon from '@mui/icons-material/AddCard';
import SendIcon from '@mui/icons-material/Send';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const UserTransactionPage = () => {
  const [userName, setUserName] = useState('');
  const [displayNumber, setDisplayNumber] = useState(null);

  const auth = getAuth();
  const firestore = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setUserName(user.displayName || '');

          const userDocRef = doc(firestore, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setDisplayNumber(userData.displayNumber || null);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, fetchUserData);

    return () => {
      // Cleanup function to unsubscribe from the auth state listener
      unsubscribe();
    };
  }, [auth, firestore]);

  return (
    <div className="container max-w-full flex items-center flex-col">
      <Link to="/" className="flex justify-start w-[90%]">
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex items-center justify-between lg:w-[80%] md:w-[90%] xsm:w-[90%] sm:w-[90%] p-6 mt-4">
        <h5 className="font-extrabold text-[1.5rem] text-blue-900">
          Hello {userName}
        </h5>
        <div className="h-[3rem] w-[3rem] border-2 border-blue-900 rounded-[50%] ">
          <img src="" alt="" />
        </div>
      </div>
      <div className="lg:w-[50%] md:w-[70%] sm:w-[80%] xsm:w-[80%] h-[10rem] bg-blue-600 px-20 py-10 flex flex-col items-center justify-center gap-2 rounded-lg mt-6">
        <p className="font-semibold text-slate-400">Total Savings</p>
        <p className="text-[2rem] text-white tracking-wider font-semibold">
          {displayNumber}
        </p>
      </div>
      <div className="flex items-center justify-around lg:w-[50%] md:w-[70%] sm:w-[90%] xsm:w-[90%] pt-4">
        <div className="flex items-center justify-around h-[3rem] w-[10rem] bg-blue-400 rounded-md">
          Add Funds <AddCardIcon/>
        </div>
        <div className="flex items-center justify-around h-[3rem] w-[10rem] bg-green-400 rounded-md">
          Transfer Funds <SendIcon/>
        </div>
      </div>
      <div className="w-[90%] h-[10rem] border-2 rounded-md mt-4"></div>
    </div>
  );
};

export default UserTransactionPage;
