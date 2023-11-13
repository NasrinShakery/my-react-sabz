import { object } from "prop-types";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const Users = () => {
   const [users, setUsers] = useState([]);
   const [err, setErr] = useState("");

   useEffect(() => {
      fetch("https://project11-60413-default-rtdb.firebaseio.com/users.json")
         .then((response) => response.json())
         .then((data) => {
            console.log(Object.entries(data));
            setUsers(Object.entries(data));
         })
         .catch((error) => {
            setErr(error);
         });
   }, []);

   return (
      <>
         {err ? (
            <>
               <h1 style={{ color: "red" }}> Turn On Your * VPN * !!</h1>
               <p>{err}</p>
            </>
         ) : (
            <>
               <Table striped bordered hover>
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                     </tr>
                  </thead>
                  <tbody>
                     {users.map((user) => (
                        <tr>
                           <td>#</td>
                           <td>{user[1].fname}</td>
                           <td>{user[1].lname}</td>
                           <td>{user[1].email}</td>
                        </tr>
                     ))}
                  </tbody>
               </Table>
            </>
         )}
      </>
   );
};

export default Users;
