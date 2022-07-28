import { Box, Button, TextField } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import React from "react";
import { useEffect } from "react";

export const Homepage = () => {
  useEffect(() => {
    document.title = "Web meeting application";
  }, []);
  return (
    <Box
      sx={{
        margin: "5% 7%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "47%",
        }}
      >
        <p style={{ fontSize: "50px" }}>
          HD video meeting, <br /> Free for everyone
        </p>
        <p style={{ fontSize: "20px", width: "70%", margin: "auto" }}>
          Feel free to connect with your student, colleague, business partner,
          love ones etc.
        </p>

        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="contained" size="large">
            <VideoCallIcon /> New meeting
          </Button>

          <TextField
            id="outlined-basic"
            label="Enter the URL"
            variant="outlined"
          />
          <Button>Join</Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "49%",
        }}
      >
        <img
          src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
          alt=""
        />
        <p style={{ fontSize: "25px", margin: "0px" }}>
          Join a meeting with url
        </p>
        <p>Start a meeting by just clicking on New meeting</p>
      </Box>
    </Box>
  );
};
