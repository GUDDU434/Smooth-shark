import React from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate()
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
      <Box onClick={()=>navigate("/")}>
          <h1>Meet Room</h1>
      </Box>
      <Box
        sx={{
          width: "25%",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "20px",
        }}
      >
        <Link to={"#"}>Date</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"#"}>Setting</Link>
      </Box>
    </Box>
  );
};
