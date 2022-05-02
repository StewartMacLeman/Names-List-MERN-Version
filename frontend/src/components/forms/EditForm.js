import React from "react";

const EditForm = (props) => {
  return (
    <form className="editForm" onSubmit={props.confirmEdit}>
      <div className="inputContainer">
        <label htmlFor="f_name_edit">First Name:</label>
        <input
          type="text"
          id="f_name_edit"
          autoComplete="off"
          value={props.editedFirstName}
          onChange={(e) => props.setEditedFirstName(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="l_name_edit">Last Name:</label>
        <input
          type="text"
          id="l_name_edit"
          autoComplete="off"
          value={props.editedLastName}
          onChange={(e) => props.setEditedLastName(e.target.value)}
        />
      </div>
      <div className="buttonsCont">
        <button type="button" className="delCol" onClick={props.cancelEdit}>
          Cancel
        </button>
        <button type="submit">Submit Edit</button>
      </div>
    </form>
  );
};

export default EditForm;
