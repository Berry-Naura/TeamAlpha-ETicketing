import React from "react";
import Login from "./Pages/resgistration/Login";
import SignUp from "./Pages/resgistration/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import HeaderNavBar from "./Components/UI/HeaderNavBar";
function App() {
  return (
    <div>
      {/* <SignUp></SignUp>
     <Login></Login> */}
      <HeaderNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
