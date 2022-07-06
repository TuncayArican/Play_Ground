import Duty from "./Duty";

const Tasks = ({ tasks, deleteTask, toggleShow }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Duty task={task} deleteTask={deleteTask} toggleShow={toggleShow} />
      ))}
    </div>
  );
};

export default Tasks;