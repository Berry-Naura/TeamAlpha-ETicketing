import React from "react";
import Login from "./Pages/resgistration/Login";
import SignUp from "./Pages/resgistration/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import AuthProvider, { useAuth } from "./context/authContext";
import User from "./Pages/user/User";
import DataContextProvider from "./context/dataContext";

import Payment from "./Pages/payment/Payment";
function App() {
  const {currentUser}=useAuth()
  return (
    <>
      <DataContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/payment' element={<Payment />} />
          <Route path="/user" element={!currentUser.isAuthenticated? <User />:<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>  
      </DataContextProvider>  
    </>
  );
}

export default App;
