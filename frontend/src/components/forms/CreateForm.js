import React from "react";

const CreateForm = (props) => {
  return (
    <form className="mainForm" onSubmit={props.handleNewName}>
      <div className="inputContainer">
        <label htmlFor="f_name">First Name:</label>
        <input
          type="text"
          id="f_name"
          autoFocus
          autoComplete="off"
          value={props.newFirstName}
          onChange={(e) => props.setNewFirstName(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="l_name">Last Name:</label>
        <input
          type="text"
          id="l_name"
          autoComplete="off"
          value={props.newLastName}
          onChange={(e) => props.setNewLastName(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <button type="submit">Submit Name</button>
      </div>
    </form>
  );
};

export default CreateForm;
