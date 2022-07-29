import React from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export const Navbar = () => {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let latestDate = new Date().toDateString();
    setDate(latestDate);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.light",
        padding: "0px 7%",
      }}
    >
      <Box onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <h1>Meet Room</h1>
      </Box>
      <Box
        sx={{
          width: "35%",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "20px",
        }}
      >
        <span>{date}</span>
        <span style={{ cursor: "pointer" }}>
          <PersonIcon />
        </span>
        <span
          onClick={() => navigate("/message")}
          style={{ cursor: "pointer" }}
        >
          <ChatBubbleOutlineIcon />
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/setting")}>
          <SettingsIcon />
        </span>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
      </Box>
    </Box>
  );
};
