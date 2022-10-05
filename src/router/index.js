import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Forgot from "../views/auth/forgotpassword";
import Verify from "../views/auth/codeverification";
import Reset from "../views/auth/resetpassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/codeverification" element={<Verify />} />
        <Route path="/resetpassword" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
