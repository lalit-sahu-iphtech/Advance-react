import { useEffect, useState } from "react";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../API/userApi";


export default function Users(){

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);


  useEffect(()=>{

    fetchUsers();

  },[])



  // GET USERS

  async function fetchUsers(){

    try{

      setLoading(true);

      const res = await getUsers();

      setUsers(res.data);

    }
    catch(err){

      console.log(err);

    }
    finally{

      setLoading(false);

    }

  }



  // CREATE USER

  async function addUser(){

    const user = {

      name:"New User",

      email:"new@gmail.com"

    }


    try{

      const res = await createUser(user);

      console.log(res.data);

      alert("User Created");

    }
    catch(err){

      console.log(err);

    }

  }




  // UPDATE USER

  async function editUser(id){

    try{

      await updateUser(id,{

        name:"Updated User"

      });


      alert("User Updated");

    }
    catch(err){

      console.log(err);

    }

  }





  // DELETE USER

  async function removeUser(id){

    try{

      await deleteUser(id);


      setUsers(
        users.filter(
          (user)=>user.id !== id
        )
      );


    }
    catch(err){

      console.log(err);

    }

  }





  return (

    <div>

      <h1>Users</h1>


      <button onClick={addUser}>
        Create User
      </button>


      {
        loading ?

        <h3>Loading...</h3>

        :

        users.map((user)=>(

          <div key={user.id}>

            <h3>
              {user.name}
            </h3>


            <p>
              {user.email}
            </p>


            <button
              onClick={()=>editUser(user.id)}
            >
              Update
            </button>


            <button
              onClick={()=>removeUser(user.id)}
            >
              Delete
            </button>


          </div>

        ))

      }


    </div>

  )

}