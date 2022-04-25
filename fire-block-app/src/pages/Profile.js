import React from 'react'
import {useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div style={{textAlign: "center", marginTop: "6rem"}}>
    <div >
    {currentUser?.displayName ? 
    
    (<h4>{currentUser?.displayName}</h4>)
    :
    (<h4>Display name</h4>)}
    </div>
    <h5>{currentUser?.email}</h5>
    </div>
  )
}

export default Profile