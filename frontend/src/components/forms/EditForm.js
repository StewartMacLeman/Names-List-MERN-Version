import React from "react";

const EditForm = (props) => {
  return (
    <form className="editForm" onSubmit={(e) => e.preventDefault()}>
      {/* Remove the hidden input? */}
      <input type="hidden" id="hidEditInput" />
      <div className="inputContainer">
        <label htmlFor="f_name_edit">First Name:</label>
        <input type="text" id="f_name_edit" autoComplete="off" />
      </div>
      <div className="inputContainer">
        <label htmlFor="l_name_edit">Last Name:</label>
        <input type="text" id="l_name_edit" autoComplete="off" />
      </div>
      <div className="buttonsCont">
        <button type="button" className="delCol" onClick={props.cancelEdit}>
          Cancel
        </button>
        <button type="button" onClick={props.confirmEdit}>Submit Edit</button>
      </div>
    </form>
  );
};

export default EditForm;
