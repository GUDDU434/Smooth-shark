import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Homepage } from "../pages/Homepage/Homepage";
import { Login } from "../pages/Login";
import { Message } from "../pages/Message/Message";
import Signup from "../pages/Signup/Signup";

export const MainRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/message" element={<Message />}></Route>
      </Routes>
    </>
  );
};