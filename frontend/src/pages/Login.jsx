import { Alert, Box, Button, Snackbar, TextField } from '@mui/material'
import React from 'react'

export const Login = () => {
    const [email,setemail] = React.useState("")
    const [password,setpassword] = React.useState("")
    const [open, setOpen] = React.useState(false)

    const handleSubmit =()=>{
        if(!email || !password){
            console.log(false)
        }else{
            setOpen(true);
            console.log({email,password})
        }
       
    }

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
          Login Sucessfull
        </Alert>
      </Snackbar>
    
      <div>
        <TextField
          label="Email"
          name="email"
          type={"email"}
          placeholder="Enter email id (guddu@gmail.com)"
          variant="standard"
          onChange={(e)=>setemail(e.target.value)}
          value={email}
        />
      </div>

      <div>
        <TextField
          label="Create Password"
          name="password"
          placeholder="Enter the password"
          variant="standard"
          onChange={(e)=>setpassword(e.target.value)}
          value={password}
        />
      </div>
      <Button onClick={handleSubmit} variant="contained">
        Login
      </Button>
      {/* </form> */}
    </Box>
  )
}
