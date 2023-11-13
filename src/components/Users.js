import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
// import { AiFillDelete } from "react-icons/ai";
// import { BiEdit } from "react-icons/bi";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

const Users = () => {
   const [users, setUsers] = useState([]);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);
   const [getData, setGetData] = useState(false);
   const [userID, setUserID] = useState("");
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");


   useEffect(() => {
      fetch("https://project11-60413-default-rtdb.firebaseio.com/users.json")
         .then((response) => response.json())
         .then((data) => {
            console.log(Object.entries(data));
            setUsers(Object.entries(data));
         });
   }, [getData]);

   useEffect(() => {
      let mainUser = users.find(user => user[0] == userID)
      console.log(mainUser);
      if(mainUser) {
         setFname(mainUser[1].fname);
         setLname(mainUser[1].lname);
         setEmail(mainUser[1].email);
      }
   },[userID])

   const removeHandler = async () => {
      // console.log("user removed");
      // console.log(userID);

      await fetch(
         `https://project11-60413-default-rtdb.firebaseio.com/users/${userID}.json`,
         {
            method: "DELETE",
         }
      ).then((res) => console.log(res));

      setShowDeleteModal(false);
      setGetData((prev) => !prev);
   };

   const editHandler = async () => {

      let editedUserInfo = {
         fname:fname,
         lname:lname,
         email:email
      };

      await fetch(`https://project11-60413-default-rtdb.firebaseio.com/users/${userID}.json`, {
         method: "PUT",
         // headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(editedUserInfo)
      }).then(response => {console.log(response)})
      setShowEditModal(false);
      setGetData((prev) => !prev);

   };

   return (
      <>
         <Table>
            <thead>
               <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <tr key={user[0]}>
                     <td>{user[1].fname}</td>
                     <td>{user[1].lname}</td>
                     <td>{user[1].email}</td>
                     <td>
                        <Button
                           variant="danger"
                           onClick={() => {
                              setShowDeleteModal(true);
                              setUserID(user[0]);
                           }}
                        >
                           Delete
                        </Button>
                        <Button
                           variant="primary"
                           onClick={() => {
                              setShowEditModal(true);
                              setUserID(user[0]);
                           }}
                        >
                           Edit
                        </Button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </Table>
         {/* Delete modal */}
         <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this?</Modal.Body>
            <Modal.Footer>
               <Button
                  variant="secondary"
                  onClick={() => setShowDeleteModal(false)}
               >
                  Close
               </Button>
               <Button variant="danger" onClick={removeHandler}>
                  Yes, Delete it.
               </Button>
            </Modal.Footer>
         </Modal>
         {/* Edit modal */}
         <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group className="mb-3" controlId="formBasicFname">
                     <Form.Label>First Name :</Form.Label>
                     <Form.Control type="text" placeholder="First Name" value={fname}  onChange={event => setFname(event.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicLname">
                     <Form.Label>Last Name :</Form.Label>
                     <Form.Control type="text" placeholder="Last Name" value={lname}  onChange={event => setLname(event.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email :</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" value={email}  onChange={event => setEmail(event.target.value)} />
                     
                  </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button
                  variant="secondary"
                  onClick={() => setShowEditModal(false)}
               >
                  Close
               </Button>
               <Button variant="danger" onClick={editHandler}>
                  Edite
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
};

// const Users = () => {
//    const [users, setUsers] = useState([]);

//    const [showDeleteModal, setShowDeleteModal] = useState(false);
//    const removeHandler = () => {

//    };

//    useEffect(  () => {
//        fetch("https://project11-60413-default-rtdb.firebaseio.com/users.json")
//          .then((response) => response.json())
//          .then((data) => {
//             console.log(Object.entries(data));
//             setUsers(Object.entries(data));
//          })
//    }, []);

//    return (
//       <>
//          <Table striped bordered hover variant="dark" >
//             <thead>
//                <tr>
//                   <th>#</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>Username</th>
//                   <th>Actions</th>
//                </tr>
//             </thead>
//             <tbody>
//                {users.map((user) => (
//                   <tr>
//                      <td>#</td>
//                      <td>{user[1].fname}</td>
//                      <td>{user[1].lname}</td>
//                      <td>{user[1].email}</td>
//                      <td class="d-flex justify-content-evenly align-items-center">
//                         <BiEdit style={{ cursor: "pointer" }} />
//                         <AiFillDelete style={{ cursor: "pointer" }} onClick={setShowDeleteModal(true)} />
//                      </td>
//                   </tr>
//                ))}
//             </tbody>
//          </Table>

//             <Modal show={showDeleteModal} centered aria-labelledby="contained-modal-title-vcenter" >
//                <Modal.Header>
//                   <Modal.Title>Delete Confirm</Modal.Title>
//                </Modal.Header>
//                <Modal.Body>
//                   <p>Are you sure you want DELETE this ?</p>
//                </Modal.Body>
//                <Modal.Footer>
//                   <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
//                      Close
//                   </Button>
//                   <Button variant="primary" onClick={()=>removeHandler}>
//                   Yes,  Delete it.
//                   </Button>
//                </Modal.Footer>
//             </Modal>

//       </>
//    );
// };

export default Users;
