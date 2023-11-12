import React, { useState } from "react";
import "./styles.css";
import { TextField, Button } from "@mui/material";
import Box from '@mui/material/Box';

const Login = () => {
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");

   const submitHandler = (event) => {
      event.preventDefault();
      console.log("***********");
      let userInfo = {
         fname:fname,
         lname:lname,
         email:email
      };
      console.log(userInfo.fname);
      
      fetch("https://project11-60413-default-rtdb.firebaseio.com/users.json", {
         method: "POST",
         // headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(userInfo)
      }).then(response => {console.log(response)})
      // .catch(err => {console.log(err)})
   };

   return (
      <div className="App">
         <Box className="form"  component="form" autoComplete="off" onSubmit={submitHandler}>
            <TextField
               label="first name"
               variant="outlined"
               id="fname"
               value={fname}
               onChange={(e) => setFname(e.target.value)}
            />
            <TextField
               label="last name"
               id="lname"
               variant="outlined"
               value={lname}
               onChange={(e) => setLname(e.target.value)}
            />
            <TextField
               label="email"
               id="email"
               variant="outlined"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />

            <Button className="form__custom-button" variant="outlined">
               Log in
            </Button>
         </Box>
      </div>
   );
};

export default Login;
