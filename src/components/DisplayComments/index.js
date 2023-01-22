import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { Card } from 'react-bootstrap'

import { useAuth } from "../../contexts/AuthContext"



function DisplpayComments() {

  const { currentUser } = useAuth()


const usersCollectionRef = collection(db, "users");

const [users, setUsers] = useState([]);

useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
}, []);

const admin = 'Vz0YScJqL4eB7RqMb5jJ8QaK6Tu1'

return (
    <div>


      {users.map((user) => {
if(currentUser.uid === admin ) {


        return (
          <Card>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Company: {user.company}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Phone: {user.phone}</h1>
          </Card>
        );
}
else {
  return
}
      })}


    </div>
  );

}
export default DisplpayComments;
