import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

export const Message = () => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto 7%",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "30%", height: "633px", border: "solid" }}>
        <h3>
          <span>
            <PersonIcon />
          </span>{" "}
          Name of the user
        </h3>
        <hr />
        map the user here
      </Box>
      <Box sx={{ width: "68%", height: "633px", border: "solid" }}>
        <Box sx={{ height: "570px" }}>map the message of the user</Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <TextField placeholder="Message" size="300" sx={{ width: 800 }} />
          <Button>
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
