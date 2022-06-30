import React from 'react'
import { useState } from "react";

const Button = ({showAddTask,setShowAddTask}) => {
  return (

    <button onClick={()=> setShowAddTask(!showAddTask)}>
      {showAddTask ? "Show Add Task Bar": "Close Add Task Bar" }
      </button>
  )
}

export default Button
