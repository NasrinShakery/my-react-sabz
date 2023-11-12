import React, { useState } from "react";



const Login1 = () => {
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");

   const submitHandler = (e) => {
      e.preventDefault();
      console.log("333333333333");
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
      <div >
         <form   onSubmit={submitHandler}>
            <input
               placeholder="first name"
               id="fname"
               value={fname}
               onChange={(e) => setFname(e.target.value)}
               type="text"
            />
            <input
               placeholder="last name"
               id="lname"
               
               value={lname}
               onChange={(e) => setLname(e.target.value)}
               type="text"
            />
            <input
               placeholder="email"
               id="email"
               
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="email"
            />

            <button >
               Log in
            </button>
         </form>
      </div>
   );
};

export default Login1;