import React from "react";
import { Route, Routes } from "react-router-dom";
// import Chat from "../components/Chat";
import { Navbar } from "../components/Navbar/Navbar";
import { Homepage } from "../pages/Homepage/Homepage";
import { Login } from "../pages/Login";
import { Message } from "../pages/Message/Message";
import Signup from "../pages/Signup/Signup";
import VideoCall from "./VideoCall";
import Setting from "../components/Settingpage/Setting"
import Chat from "../pages/Chat"
import InvalidPage from "../components/InvalidPage";
export const MainRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/message" element={<Chat />}></Route>
        <Route path="/videocall" element={<VideoCall />}></Route>
        {/* <Route path="/setting" element={<Setting />}></Route> */}
        <Route path="/:name" element={<InvalidPage />}></Route>
        <Route path="/:name/:id" element={<InvalidPage />}></Route>
      </Routes>
    </>
  );
};
