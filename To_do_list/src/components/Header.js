// import PropTypes from "prop-types";
import Button from "./Button";

import React from 'react'

const Header = ({title, showAddTask, setShowAddTask}) => {
  return (
    <div>
      <h1>{title}</h1>
      <Button showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
    </div>
  )
}

export default Header