import { FaTimes } from "react-icons/fa";
const Duty = ({ duty, deleteTask, toggleDone }) => {
  return (
    <div
     
    >
      <h3>
        {duty.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(duty.id)}
        />
      </h3>
      <p>{duty.day}</p>
    </div>
  );
};

export default Duty;
