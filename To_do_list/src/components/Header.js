import React from 'react'
import { useState } from 'react';

const Header = ({showLogo,setshowLogo}) => {

  


  const showLogo1 = () => {
    setshowLogo(!showLogo)
  };



  return (
    <div>
      <h1>TASK TRACKER</h1>
      <button onClick={()=>setshowLogo(!showLogo)} >{showLogo? "Close add Task Bar"  : "Show add task Bar"}</button>
     
    </div>
  )
}

export default Header