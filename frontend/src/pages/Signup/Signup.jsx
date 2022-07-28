import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, Snackbar } from "@mui/material";
import axios from "axios";

export default function Signup() {
  const [formData, setValue] = React.useState({});
  const [open, setOpen] = React.useState(false);

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
      console.log("err password not mached");
    } else {
      console.log("Go ahead");
      setOpen(true);
      //   axios
      //     .post("http://localhost:8080/signup", formData)
      //     .then(({ data }) => {
      //         setOpen(true)
      //         console.log(data)
      //     })
      //     .catch((err) => console.log(err));
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      component="form"
      sx={{margin:"2%",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Signup Sucessfull
        </Alert>
      </Snackbar>
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
  );
}
