import { Alert, Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { SocketContext } from "../contextApi/Context";

export const Login = () => {
  const { user, setUser } = useContext(SocketContext);
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openErr, setopenErr] = React.useState(false);
  const [res, setres] = React.useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setOpen(false);
      setopenErr(true);
      setres("Email or password is missing");
    } else {
      axios
        .post("http://localhost:8080/user/login", { email, password })
        .then(({ data }) => {
          setopenErr(false);
            setOpen(true);
            setres(data.message);
            setUser(data.response)
            console.log(data);
        })
        .catch(({ response }) => {
          setOpen(false);
          setopenErr(true);
          console.log(response.data.message);
          setres(response.data.message);
        });
    }
  };

  return (
    <>
      {open && <Alert severity="success">{res}</Alert>}
      {openErr && <Alert severity="error">{res}</Alert>}

      <Box
        component="form"
        sx={{ margin: "2%", "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Email"
            name="email"
            type={"email"}
            placeholder="Enter email id (guddu@gmail.com)"
            variant="standard"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <TextField
            label="Create Password"
            name="password"
            placeholder="Enter the password"
            variant="standard"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
        </div>
        <Button onClick={handleSubmit} variant="contained">
          Login
        </Button>
        {/* </form> */}
      </Box>
    </>
  );
};
