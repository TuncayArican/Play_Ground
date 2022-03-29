import React from "react";

const Main = () => {
  return (
    <div>
      <button type="button" className="btn btn-danger btn-lg">
        Close Add Task Bar
      </button>
      <div className="mb-1 p-3">
        <label for="formGroupExampleInput" className="form-label ">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="AddTask"
        />
      </div>
      <div className="mb-3 mb-3 p-3">
        <label for="formGroupExampleInput2" className="form-label">
          Day and Time
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Add Day & Time"
        />
      </div>
      <button type="button" className="btn alt">
        Save Task
      </button>

      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span className="badge bg-primary rounded-pill">X</span>
        </li>
      </ul>
    </div>
  );
};

export default Main;
