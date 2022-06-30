import Duty from "./Duty";

import React from 'react'

const Tasks = ({tasks, deleteTask}) => {
  {}
  return (
    <div>
        {tasks.map((task) => (
          <Duty duty={task} deleteTask={deleteTask} />
      ))}
    </div>
  )
}

export default Tasks