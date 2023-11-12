import React, { useState } from "react";
import "./styles.css";

import { TextField, Button } from "@mui/material";


const Login = () => {
   const [fname, setFname] = useState();
   const [lname, setLname] = useState();
   const [email, setEmail] = useState();

   const submitHandler = (e) => {
      e.preventDefault();
   };

   return (
      <div className="App">
         <form className="form" autoComplete="off" onSubmit={submitHandler}>
            <TextField
               label="first name"
               variant="outlined"
               id="fname"
               value={fname}
               onChange={(e) => setFname(e.target.value)}
               type="text"
            />
            <TextField
               label="last name"
               id="lname"
               variant="outlined"
               value={lname}
               onChange={(e) => setLname(e.target.value)}
               type="text"
            />
            <TextField
               label="email"
               id="email"
               variant="outlined"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="email"
            />

            <Button
               type="button"
               color="primary"
               className="form__custom-button"
               variant="outlined"
            >
               Log in
            </Button>
         </form>
      </div>
   );
};

export default Login;
