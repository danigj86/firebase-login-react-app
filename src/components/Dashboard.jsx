import React from 'react';
import { useUserContext } from '../context/userContext';
import { auth } from "../firebase";



export const Dashboard = () => {

  const { user, logoutUser } = useUserContext();


  return <div>
      <h2>Hello Peter</h2>
      <p>Nombre: {user.displayName}</p>
      <p>Nombre auth: {auth.currentUser.displayName}</p>
      <p>Email: {user.email}</p>
      <button onClick={logoutUser}>Log Out</button>
  </div>;
};
