import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Logo from "../../assets/loader.gif";
import { SocketContext } from "../../contextApi/Context";

export const Navbar = () => {
    const {  isLogIn, setIsLogIn } = useContext(SocketContext);
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
        backgroundColor: "#080420",
        padding: "0px 7%",
        color: "#fff",
      }}
    >
      <Box onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <div style={{ display: "flex" }}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "130px", height: "90px" }}
          />
          {/* <h1>Meet Room</h1> */}
        </div>
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
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/setting")}
        >
          <SettingsIcon />
        </span>
        {!isLogIn && (
          <>
            <Link
              to={"/signup"}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Signup
            </Link>
            <Link
              to={"/login"}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Login
            </Link>
          </>
        )}
        {isLogIn && (
          <>
            <p
              onClick={()=>{
                localStorage.clear();
                navigate("/login");
                setIsLogIn(false)
              }}
            >
              Logout
            </p>
          </>
        )}
      </Box>
    </Box>
  );
};
