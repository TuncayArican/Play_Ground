import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  const [showLogo, setshowLogo] = useState(false);

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  const deleteTask = (id) => {
    const filteredTask=tasks.filter((tutor) => tutor.id !== id)
    setTasks(filteredTask);
  };

  const toggleShow = (id) => {
    
  tasks.filter((tutor) => tutor.id == id).map((tutor) => ({...tasks, isDone: !tutor.isDone}));

  };

  return (
    <div className="container">
      
      <Header showLogo= {showLogo} setshowLogo = {setshowLogo}/>
      {showLogo && <AddTask addTask={addTask}/>}
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleShow={toggleShow}/>
    </div>
  );
}

export default App;
