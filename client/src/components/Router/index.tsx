import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import MainPage from "../../pages/MainPage";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default index;
