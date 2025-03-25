import React from "react";
import Login from "./Pages/resgistration/Login";
import SignUp from "./Pages/resgistration/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Payment from "./Pages/payment/Payment";
function App() {
  return (
    <div>
      {/* <SignUp></SignUp> */}
      <Payment />
      <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>      
    </div>
  );
}

export default App;
