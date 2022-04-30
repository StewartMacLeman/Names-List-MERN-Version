import React from "react";

const CreateForm = () => {
  return (
    <form className="mainForm" onSubmit={(e) => e.preventDefault()}>
      <div className="inputContainer">
        <label htmlFor="f_name">First Name:</label>
        <input type="text" id="f_name" autoComplete="off" />
      </div>
      <div className="inputContainer">
        <label htmlFor="l_name">Last Name:</label>
        <input type="text" id="l_name" autoComplete="off" />
      </div>
      <div className="inputContainer">
        <button type="button">Submit Name</button>
      </div>
    </form>
  );
};

export default CreateForm;
