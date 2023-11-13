import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
// import { AiFillDelete } from "react-icons/ai";
// import { BiEdit } from "react-icons/bi";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Users = () => {
   const [users, setUsers] = useState([]);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);
   const [getData, setGetData]= useState(false);
   const [userID, setUserID] = useState("");

   useEffect(() => {
      fetch("https://project11-60413-default-rtdb.firebaseio.com/users.json")
         .then((response) => response.json())
         .then((data) => {
            console.log(Object.entries(data));
            setUsers(Object.entries(data));
         });
   }, [getData]);

   const removeHandler = async () => {
      // console.log("user removed");
      // console.log(userID);

      await fetch(`https://project11-60413-default-rtdb.firebaseio.com/users/${userID}.json`,{
        method: "DELETE"
      }).then(res => console.log(res))

      setShowDeleteModal(false);
      setGetData(prev => !prev);
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
                           onClick={() => setShowEditModal(true)}
                        >
                           Edit
                        </Button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </Table>

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
