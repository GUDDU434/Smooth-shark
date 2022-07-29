import { Box, Modal } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Setting from "../Settingpage/Setting";
import Logo from "../../assets/loader.gif";
import { SocketContext } from "../../contextApi/Context";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
};

export const Navbar = () => {
    const {  isLogIn, setIsLogIn } = useContext(SocketContext);
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
        <span style={{ cursor: "pointer" }} onClick={handleOpen}>
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
            <span
            style={{ cursor: "pointer" }}
              onClick={()=>{
                localStorage.clear();
                navigate("/login");
                setIsLogIn(false)
              }}
            >
              Logout
            </span>
          </>
        )}
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