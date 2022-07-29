import React from "react";
import { Box, Modal } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Setting from "../Settingpage/Setting";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
};

export const Navbar = () => {
  const [date, setDate] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <span style={{ cursor: "pointer" }} onClick={handleOpen}>
          <SettingsIcon />
        </span>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <Setting/>
        </Box>
      </Modal>
    </Box>
  );
};