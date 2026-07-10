import api from "./axiosInstance";


// GET USERS

export const getUsers = ()=>{

  return api.get("/users");

}


// CREATE USER

export const createUser = (user)=>{

  return api.post("/users", user);

}


// UPDATE USER

export const updateUser = (id, user)=>{

  return api.put(`/users/${id}`, user);

}


// DELETE USER

export const deleteUser = (id)=>{

  return api.delete(`/users/${id}`);

}