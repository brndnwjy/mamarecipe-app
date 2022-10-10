import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Forgot from "../views/auth/forgotpassword";
import Verify from "../views/auth/codeverification";
import Reset from "../views/auth/resetpassword";
import Insert from "../views/recipe/insert";
import Detail from "../views/recipe/detail";
import DetailVideo from "../views/recipe/detailvideo";
import Home from "../views/home";
import Profile from "../views/profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/codeverification" element={<Verify />} />
        <Route path="/resetpassword" element={<Reset />} />

        <Route path="/insert" element={<Insert />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detailvideo" element={<DetailVideo />} />

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
