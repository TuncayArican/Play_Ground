import React, { Component } from "react";

const pStyle = {
  display: "flex",
  height: "100vh",
  backgroundColor: "aqua",
  color: "purple",
  flexDirection: "column",
  justifyContent:"center",
  alignItems:"center",
};
const newDate = `${new Date().toLocaleTimeString()}`;
const newHour = `${new Date().toDateString()}`

function Msg() {
  return (

    <div style={pStyle}>
      <h1>{newHour}</h1>
      <h1>{newDate}</h1>    
    </div>
  );
}

export default Msg;
