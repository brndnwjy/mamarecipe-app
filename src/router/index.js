import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/auth/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
