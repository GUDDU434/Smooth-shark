import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRoom from "./pages/CreateRoom"
import Room from "./pages/Room";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateRoom/>} />
        <Route path="/room/:roomID" element={<Room/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
