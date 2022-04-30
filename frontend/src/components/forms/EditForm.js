import React from "react";

const EditForm = () => {
  return (
    <form className="editForm hiddenDiv" onSubmit={(e) => e.preventDefault()}>
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
        <button type="button" className="delCol">
          Cancel
        </button>
        <button type="button">Submit Edit</button>
      </div>
    </form>
  );
};

export default EditForm;
