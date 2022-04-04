import React from "react";

const Main = () => {
  return (
    <div>
      <h1>Bone Appetite</h1>
      <form className="row g-3">
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="Search"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>

      </form>
    </div>
  );
};

export default Main;
