import React from "react";
import swal from "sweetalert";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Forgot from "../views/auth/forgotpassword";
import Verify from "../views/auth/codeverification";
import Reset from "../views/auth/resetpassword";
import Insert from "../views/recipe/insert";
import Edit from "../views/recipe/edit";
import Detail from "../views/recipe/detail";
import DetailVideo from "../views/recipe/detailvideo";
import Home from "../views/home";
import Search from "../views/search";
import Profile from "../views/profile";

const Auth = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    swal({
      title: "Denied!",
      text: `Access Denied, Please Login!`,
      icon: "error",
  });  
    return <Navigate to="/login" replace />;
  } 
    return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/codeverification" element={<Verify />} />
        <Route path="/resetpassword" element={<Reset />} />

        <Route path="/insert" element={<Auth><Insert /></Auth>} />
        <Route path="/:id" element={<Auth><Detail /></Auth>} />
        <Route path="/edit/:id" element={<Auth><Edit /></Auth>} />
        <Route path="/detailvideo" element={<Auth><DetailVideo /></Auth>} />

        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Auth><Profile /></Auth>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
