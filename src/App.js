// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import NotFounfPage from './pages/NotFounfPage';
import UserTransactionPage from './pages/UserTransactionPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/log-in" element={ <LoginPage/> } />
        <Route path="/sign-up" element={ <SignUp/> } />
        <Route path="/*" element={ <NotFounfPage/> } />
        <Route path="/transaction" element={ <UserTransactionPage/> } />
      </Routes>
    </Router>
  );
}

export default App;
