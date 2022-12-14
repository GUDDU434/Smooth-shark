import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, Snackbar } from "@mui/material";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export default function Signup() {
  const [formData, setValue] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [openErm, setopenErm] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      formData.password !== formData.confpassword ||
      formData.name == null ||
      formData.email == null ||
      formData.mobile == null
    ) {
      setOpen(false);
      setopenErm(true);
      setMessage("Data messing or password not mached");
      console.log("err password not mached");
    } else {
      // setOpen(true);
      axios
        .post("https://chattingapp434.herokuapp.com/user/signup", formData)
        .then(({ data }) => {
          if (data.status == "success") {
            setopenErm(false);
            setOpen(true);
            setMessage(data.message);
            setTimeout(() => {
              navigate("/login")
            }, 2000);
            console.log(data);
          } else {
            setOpen(false);
            setopenErm(true);
            setMessage(data.message);
            console.log(data.message);
          }
        })
        .catch((err) => {
          setOpen(false);
          setopenErm(true);
          setMessage(err.response.data.message);
          console.log(err);
        });
    }
  };

  return (
    <>
      {openErm && <Alert severity="error">{message}</Alert>}
      {open && <Alert severity="success">{message}</Alert>}
      <Box
        component="form"
        sx={{ margin: "2%", "& .MuiTextField-root": { m: 1, width: "40ch" } }}
        noValidate
        autoComplete="off"
      >
        {/* <form onSubmit={(e)=>handleSubmit(e)}> */}
        <div>
          <TextField
            label="Name"
            name="name"
            placeholder="Enter Full name (Guddu Ali)"
            variant="standard"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <TextField
            label="Email"
            name="email"
            type={"email"}
            placeholder="Enter email id (guddu@gmail.com)"
            variant="standard"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <TextField
            label="Mobile Number"
            name="mobile"
            type={"number"}
            placeholder="Enter mobile no (7549852456)"
            variant="standard"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <TextField
            label="Create Password"
            name="password"
            placeholder="Enter the password"
            variant="standard"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <TextField
            label="Confirm password"
            name="confpassword"
            placeholder="Enter the confirm password"
            variant="standard"
            onChange={handleChange}
          />
        </div>
        <Button onClick={handleSubmit} variant="contained">
          Signup
        </Button>
        {/* </form> */}
      </Box>
    </>
  );
}
